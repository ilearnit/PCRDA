from django.urls import path

from .views import UpdateData
from .read_files import ReadFiles

urlpatterns = [
    path('update/', UpdateData.as_view()),
    path('read/', ReadFiles.as_view()),
]
