<template>
  <nav class="navbar navbar-light bg-light justify-content-between px-4">
    <router-link class="navbar-brand" to="/">PCR.XYZ</router-link>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><router-link to="/about" class="btn btn-outline-secondary">关于</router-link></li>
      <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-secondary">登陆</router-link></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item"><router-link to="/document"  class="btn btn-outline-secondary">使用文档</router-link></li>
      <li class="list-inline-item"><router-link to="/dashboard" class="btn btn-outline-secondary">工作台</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {  useStore } from 'vuex'

export default defineComponent({
  name: 'GlobalHeader',
  setup(){
    const store = useStore()
    const user = store.state.user
    return { user }
  }
})
</script>

