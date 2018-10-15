from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

import numpy as np


class UpdateData(APIView):
    authentication_classes = (SessionAuthentication, )

    def post(self, request):
        value1 = request.data['value1'].split('\n')

        value2 = request.data['value2'].split('\n')

        value3 = request.data['value3'].split('\n')

        total = self.calculate_mean(value1, value2, value3)

        return Response({'data': total})

    def calculate_mean(self, value1, value2, value3):
        value1.remove('')
        value2.remove('')
        value3.remove('')

        col1 = list(map(eval, value1))
        col2 = list(map(eval, value2))
        col3 = list(map(eval, value3))

        value = []
        value.append(col1)
        value.append(col2)
        value.append(col3)

        mean = np.mean(value, axis=0)

        mean_str = ','.join(str(i) for i in mean) 

        return mean_str
