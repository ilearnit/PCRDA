<template>
  <GlobalHeader />
  <router-view></router-view>
  <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2021 PCR.XYZ</li>
        </ul>
      </small>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GlobalHeader from './components/GlobalHeader.vue';


export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
  }
});

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  width:100%;
  height: 100%;
  /* position: absolute; */
  /* /* height: 100%;  */
  box-sizing: border-box ; position: relative;
}
html,
body { height: 100%; padding: 0; margin: 0; }

</style>
