#from django.db import models
#from rest_framework_simplejwt.settings import api_settings
#from rest_framework import serializers
#from django.contrib.auth.models import User

from django.db import models
from rest_framework_simplejwt.settings import api_settings
from rest_framework import serializers
from django.contrib.auth.models import User



class UserSerializer(serializers.ModelSerializer):
    token = serializers.SerializersMethodField()
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
    )

    userName = serializers.EmailField(
            required=True,
            max_length=20
            validators=[UniqueValidator(queryset=User.objects.all())]
    )

    firstName = serializers.CharField(
        required=True,
        max_length=20,
    )

    lastName = serializers.CharField()
        required=True,
        max_length=20,
    )

    password = serializers.CharField(
        required=True,
        min_length=8,
        write_only=True
    )

    def create(self, validData): #creating user account
        password = validData.pop('password', None)
        instance = self.Meta.model(**validData)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def getToken(self, obj): #creating user tokens
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token
    def Meta:
        model=User
        field = {'token','username','password','firstname','lastname','email','id'}


