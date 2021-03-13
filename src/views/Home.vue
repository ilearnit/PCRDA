<template>

  <el-carousel indicator-position="outside" height="600px">
    <el-carousel-item v-for="item in 2" :key="item">
      <el-image :src='src' fit="cover"></el-image>
    </el-carousel-item>
  </el-carousel>

  <el-card>
    关于
    关于 联系
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    return {
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  }

})

</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
