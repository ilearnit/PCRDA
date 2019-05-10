from django.core.cache import cache

from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView

import numpy as np


class PCRDA(APIView):
    authentication_classes = (SessionAuthentication, )

    def post(self, request):
        source_key_one = request.data['source_key_one']
        source_key_two = request.data['source_key_two']
        sample_double_hole = request.data['sample_double_hole']
        inter_refer_dobule_hole = request.data['inter_refer_dobule_hole']
        refer_group_double_hole = request.data['refer_group_double_hole']

        data = cache.get(source_key_one)
        data2 = cache.get(source_key_two)

        index_dict = dict(zip(data.index, data.Cp))
        index_dict2 = dict(zip(data2.index, data2.Cp))

        av_one = self.calculate_mean(index_dict, sample_double_hole)
        av_two = self.calculate_mean(index_dict2, inter_refer_dobule_hole)

        delta_list = []
        for i in range(len(av_one)):
            delta = av_two[i] - av_one[i]
            delta_list.append(delta)

        limit = refer_group_double_hole[1] - refer_group_double_hole[0]
        delta_av_list = delta_list[:limit+1]
        delta_mean = np.mean(delta_av_list)

        delta_delta_CT = []
        for i in delta_list:
            delta_deleta_ct = i - delta_mean
            delta_delta_CT.append(delta_deleta_ct)

        # delta_delta_CT = [i - delta_mean for i in delta_mean]
        result = [2 ** -i for i in delta_delta_CT]

        return Response({'result': result})

    def calculate_mean(self, index_dict, hole_one):
        i = hole_one[0]
        mean = []
        while i < hole_one[1] + 1:
            value_one = index_dict[i]
            value_two = index_dict[i + 24]
            value_three = index_dict[i + 48]
            total = value_one + value_two + value_three
            mean.append(total / 3)
            i += 1

        return mean
