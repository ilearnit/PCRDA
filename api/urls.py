from django.urls import path

from .views import UpdateData
from .read_files import ReadFiles
from .pcr import PCRDA

urlpatterns = [
    path('update/', UpdateData.as_view()),
    path('read/', ReadFiles.as_view()),
    path('analysis/', PCRDA.as_view()),
]
