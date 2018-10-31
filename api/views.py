from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

import numpy as np
import re


class UpdateData(APIView):
    authentication_classes = (SessionAuthentication, )

    def post(self, request):

        value = request.data['value']

        mean = self.calculate_mean(value)

        mean_str = ','.join(str(i) for i in mean)

        result = {}
        result['mean_str'] = mean_str
        # result['delta_CT'] = ''
        # result['delta_delta_CT'] = ''

        # if value4:
        #     value4 = value4.strip().split('\n')
        #     value4 = list(map(eval, value4))
        #     delta_ct = np.subtract(mean, value4)
        #     delta = ','.join(str(i) for i in delta_ct)
        #     result['delta_CT'] = delta

        # if value5:
        #     value5 = value5.strip().split('\n')
        #     value5 = list(map(eval, value5))
        #     delta_mean = np.mean(value5)

        #     delta_delta_CT = ','.join(str(2 ** -(i - delta_mean)) for i in delta_ct)

        #     result['delta_delta_CT'] = delta_delta_CT

        return Response(result)

    def calculate_mean(self, value):

        value = value.strip().split('\n')
        total_data = []
        for i in value:
            mean_str = [float(e) for e in i.split('\t')]
            total_data.append(mean_str)

        mean = np.mean(total_data, axis=1)

        return mean
