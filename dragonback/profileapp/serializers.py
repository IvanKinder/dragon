from rest_framework import serializers

from profileapp.models import UserProfile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['user', 'user_description', 'user_avatar', 'profile_image']
