from django.contrib import admin
from django.urls import path, re_path, include

from authapp.views import RegistrationAPIView, LoginAPIView
from profileapp.views import ProfileViewSet


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^registration/?$', RegistrationAPIView.as_view(), name='user_registration'),
    re_path(r'^login/?$', LoginAPIView.as_view(), name='user_login'),
    path('profile/', ProfileViewSet.as_view(), name='profile'),
    path('', include('rest_framework.urls', namespace='rest_framework'))
]
