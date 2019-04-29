from django.urls import path

from .views import index, about, documentation

urlpatterns = [
    path('', index, name='index'),
    path('about/', index, name='about'),
    path('documentation/', index, name='documentation'),
]
