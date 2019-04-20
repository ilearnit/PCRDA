import os
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

import pandas as pd
import numpy as np


class ReadFiles(APIView):
    authentication_classes = (SessionAuthentication, )

    def post(self, request):
        file_obj = request.FILES['filepond']

        fileExt = os.path.splitext(file_obj.name)[1][1:].lower()
        if fileExt != 'txt':
            error_msg = 'Permission denied.'
            return api_error(status.HTTP_403_FORBIDDEN, error_msg)

        if file_obj.content_type != 'text/plain':
            error_msg = 'Permission denied.'
            return api_error(status.HTTP_403_FORBIDDEN, error_msg)

        data = pd.read_csv(file_obj, sep="\t")
        data = data.fillna('-1')
        return Response({'data': data})

    def delete(self, request):
        return Response({'success': True})

def api_error(code, msg):
    err_resp = {'error_msg': msg}
    return Response(err_resp, status=code)
