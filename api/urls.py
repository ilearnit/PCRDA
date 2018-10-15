from django.urls import path

from .views import UpdateData

urlpatterns = [
    path('update/', UpdateData.as_view()),
]
