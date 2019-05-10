from django.urls import path

from .read_files import ReadFiles
from .calculate_delta_delta_ct import CalculateDeltaDeltaCt

urlpatterns = [
    path('read/', ReadFiles.as_view()),
    path('analysis/', CalculateDeltaDeltaCt.as_view()),
]
