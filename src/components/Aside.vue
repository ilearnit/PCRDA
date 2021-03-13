
<template>
  <el-card shadow="always" class="max-80 overflow-auto box-card">
    <el-form label-width="100px">
      操作台
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Aside',
  })
</script>

<style scoped>
.max-80 {
  max-height: 600px;
}
.overflow-auto {
  overflow: auto !important;
}

</style>
