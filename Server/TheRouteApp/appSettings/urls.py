#from django.contrib import admin
from django.urls import path
from .views import SettingsView
#from rest_framework_simplejwt.views import refresh_simplejwt_token, verify_simplejwt_token
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView


urlpatterns = [
    path("settings", SettingsView.as_view()),
    path('create-new-setting/', SettingsView.as_view())
]
# localhost:8000/api/v1.0/user/test