<template>
  
    <el-container class="min-80">
      <el-main><Tabs /></el-main>
      <el-aside width="30%"><Aside /></el-aside>
    </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Aside from '../components/Aside.vue';
import Tabs from '../components/Tabs.vue';

export default defineComponent({
  name: 'DashBoard',
  props: {
    msg: String,
  },
  components:{
    Tabs,
    Aside,
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .min-80 {
    min-height: 85%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
    padding: 20px 20px 0 0;
  }

  .el-main {
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
