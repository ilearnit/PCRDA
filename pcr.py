# -*- coding:utf-8-*-
import pandas as pd
import numpy as np


def read_file(hole_one, hole_two=None, refer_group=None):
    data = pd.read_csv('./demo.txt', sep="\t", usecols=['Cp'])
    data2 = pd.read_csv('./demo2.txt', sep="\t", usecols=['Cp'])

    index_dict = dict(zip(data.index, data.Cp))
    index_dict2 = dict(zip(data2.index, data2.Cp))

    av_one = calculate_mean(index_dict, hole_one)
    av_two = calculate_mean(index_dict2, hole_two)

    delta_list = []
    for i in range(len(av_one)):
        delta = av_one[i] - av_two[i]
        delta_list.append(delta)

    limit = refer_group[1] - refer_group[0]
    delta_av_list = delta_list[:limit]
    delta_mean = np.mean(delta_av_list)

    delta_delta_CT = []
    for i in delta_list:
        delta_deleta_ct = i - delta_mean
        delta_delta_CT.append(delta_deleta_ct)

    # delta_delta_CT = [i - delta_mean for i in delta_mean]
    result = [2 ** -i for i in delta_delta_CT]
    print result


def calculate_mean(index_dict, hole_one):
    i = hole_one[0]
    mean = []
    while i < hole_one[1]:
        value_one = index_dict[i]
        value_two = index_dict[i + 24]
        value_three = index_dict[i + 48]
        total = value_one + value_two + value_three
        mean.append(total / 3)
        i += 1

    return mean


if __name__ == '__main__':

    sample_double_hole = input('Input sample double hole start and end:')
    inter_refer_double_hole = input('Input internal reference double hole start and end:')
    refer_group = input('Input Reference group double hole start and end:')
    # double_hole_one = [0, 12]
    # double_hole_two = [300, 312]
    read_file(sample_double_hole, inter_refer_double_hole, refer_group)
