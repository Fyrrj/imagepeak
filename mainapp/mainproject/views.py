from rest_framework import generics, permissions, pagination
from rest_framework.response import Response

from .permissions import IsOwnerOrReadOnly
from .serializers import PostSerializer
from django.shortcuts import render


def base_view(request):
    return render(request, 'react.html')

