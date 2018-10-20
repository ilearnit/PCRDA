from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

import numpy as np


class UpdateData(APIView):
    authentication_classes = (SessionAuthentication, )

    def post(self, request):

        value1 = request.data['value1'].strip().split('\n')
        value2 = request.data['value2'].strip().split('\n')
        value3 = request.data['value3'].strip().split('\n')
        value4 = request.data['value4']
        value5 = request.data['value5']

        mean = self.calculate_mean(value1, value2, value3)

        mean_str = ','.join(str(i) for i in mean)

        result = {}
        result['mean_str'] = mean_str
        result['delta_CT'] = ''
        result['delta_delta_CT'] = ''

        if value4:
            value4 = value4.strip().split('\n')
            value4 = list(map(eval, value4))
            delta_ct = np.subtract(mean, value4)
            delta = ','.join(str(i) for i in delta_ct)
            result['delta_CT'] = delta

        if value5:
            value5 = value5.strip().split('\n')
            value5 = list(map(eval, value5))
            delta_mean = np.mean(value5)

            delta_delta_CT = ','.join(str(2 ** -(i - delta_mean)) for i in delta_ct)

            result['delta_delta_CT'] = delta_delta_CT

        return Response(result)

    def calculate_mean(self, value1, value2, value3):

        col1 = list(map(eval, value1))
        col2 = list(map(eval, value2))
        col3 = list(map(eval, value3))

        value = []
        value.append(col1)
        value.append(col2)
        value.append(col3)

        mean = np.mean(value, axis=0)

        return mean
