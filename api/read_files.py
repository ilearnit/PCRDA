import os
import hashlib
import time

from django.core.cache import cache

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

        result = []
        for pos, cp in zip(data.Pos, data.Cp):
            tmp = {}
            tmp['pos'] = pos
            tmp['cp'] = cp
            result.append(tmp)

        timestamp = str(time.time())
        filename = (file_obj.name + timestamp).encode('utf-8')
        filename_md5 = hashlib.md5(filename).hexdigest()
        cache_key = 'file_%s' % filename_md5
        file_content = cache.get(cache_key)
        if file_content is None:
            # otherwise, read file from database and update cache
            cache.set(cache_key, data, 1 * 24 * 60 * 60)

        return Response({'data': result, 'key': cache_key})

    def delete(self, request):
        return Response({'success': True})


def api_error(code, msg):
    err_resp = {'error_msg': msg}
    return Response(err_resp, status=code)
