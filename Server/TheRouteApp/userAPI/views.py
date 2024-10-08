from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer

# Create your views here.
class TestView(APIView):
    def get(self, request, format=None):
        print("API call was made")
        return Response("You made It", status=201)

class UserView(APIView):
    def post(self, request, format=None):

        return Response("Creating a user", status=200)