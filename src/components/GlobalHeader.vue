<template>
  <nav class="navbar navbar-light bg-light justify-content-between px-4">
    <router-link class="navbar-brand" to="/">PCR.XYZ</router-link>
    <!-- <ul v-if="true" class="list-inline mb-0">
      <li class="list-inline-item"><router-link to="/" class="btn btn-outline-secondary my-2">首页</router-link></li>
      <li class="list-inline-item"><router-link to="/document" class="btn btn-outline-secondary my-2">使用文档</router-link></li>
      <li class="list-inline-item"><router-link to="/dashboard" class="btn btn-outline-secondary my-2">工作台</router-link></li>
      <li class="list-inline-item"><router-link to="/about" class="btn btn-outline-secondary my-2">关于</router-link></li>
      <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-secondary my-2">登陆</router-link></li>
      <li class="list-inline-item"><router-link to="/signup" class="btn btn-outline-secondary my-2">注册</router-link></li>
    </ul> -->

    <ul class="list-inline mb-0">
      <li class="list-inline-item"><router-link to="/"  class="btn btn-outline-secondary">首页</router-link></li>
      <li class="list-inline-item"><router-link to="/document"  class="btn btn-outline-secondary">使用文档</router-link></li>
      <li class="list-inline-item"><router-link to="/dashboard" class="btn btn-outline-secondary">工作台</router-link></li>
      <li class="list-inline-item"><router-link to="/about" class="btn btn-outline-secondary">关于</router-link></li>
      <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-secondary">登陆</router-link></li>
      <li class="list-inline-item"><router-link to="/signup" class="btn btn-outline-secondary">注册</router-link></li>
      </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GlobalHeader',

})
</script>

