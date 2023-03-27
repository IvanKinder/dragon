import base64
import os
from urllib.parse import unquote_plus
from PIL import Image

from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from authapp.models import User
from profileapp.models import UserProfile
from profileapp.serializers import ProfileSerializer


class ProfileViewSet(APIView):
    renderer_classes = [JSONRenderer]

    @staticmethod
    def convert_image(path, size, user_id):
        path = unquote_plus(path, encoding="utf-8")
        converted_path = '/'.join(path.split('/')[:-1]) + '/' + str(user_id) + path.split('/')[-1]
        img = Image.open(path)
        if size == 'big':
            basewidth = 1618

            ratio = (basewidth / float(img.size[0]))
            height = int((float(img.size[1]) * float(ratio)))
            img = img.resize((basewidth, height), Image.ANTIALIAS)
        else:
            box_size = 200
            ratio = (box_size / float(img.size[0]))
            height = int((float(img.size[1]) * float(ratio)))
            img = img.resize((box_size, height), Image.ANTIALIAS)
            img_width, img_height = img.size
            img = img.crop(((img_width - box_size) // 2,
                         (img_height - box_size) // 2,
                         (img_width + box_size) // 2,
                         (img_height + box_size) // 2))
            print(img.size)

        if not os.path.exists(converted_path):
            img.save(converted_path)
        return converted_path

    def get(self, request, format=None):
        profile = UserProfile.objects.get(user=request.user)
        serializer = ProfileSerializer(profile)

        converted_big_path = self.convert_image(serializer.data['profile_image'][1:], 'big', str(request.user.id))
        converted_avatar_path = self.convert_image(serializer.data['user_avatar'][1:], '', str(request.user.id))

        with open(converted_big_path, 'rb') as profile_image_file:
            big_img = base64.b64encode(profile_image_file.read())
        with open(converted_avatar_path, 'rb') as avatar_file:
            avatar = base64.b64encode(avatar_file.read())

        response = Response({
            'user_description': serializer.data['user_description'],
            'big_avatar': big_img,
            'username': request.user.username,
            'avatar': avatar,
            'email': request.user.email
        })

        return response

    def put(self, request):
        profile = UserProfile.objects.get(user=request.user.id)
        user = User.objects.get(id=request.user.id)
        data_to_update = request.data

        profile.user_description = data_to_update['userDescription']
        user.email = data_to_update['userEmail']
        user.username = data_to_update['username']

        profile.save()
        user.save()

        return Response({
            'data': 'ok'
        })

