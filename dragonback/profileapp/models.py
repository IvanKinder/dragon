from django.db import models

from authapp.models import User


class UserProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    user_description = models.CharField(max_length=128)
    user_avatar = models.ImageField(upload_to='static/users_avatars')
    profile_image = models.ImageField(upload_to='static/profile_images')
