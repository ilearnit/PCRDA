from django.urls import path

from .views import index, about, help

urlpatterns = [
    path('', index, name='index'),
    path('about/', about, name='about'),
    path('help/', help, name='help'),
]
