<template>
    <el-upload
      class="upload"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      v-if="showUpload"
      :on-success="success">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <template #tip>
        <div class="el-upload__tip">
          只能上传 txt/excel 文件，且不超过 500kb
        </div>
      </template>
    </el-upload>
</template>

<script lang="ts">

// interface DataType {
//     showUpload: boolean;
// }

import { defineComponent, ref, reactive, toRefs } from 'vue';
export default defineComponent({
  name: 'UploadFile',
  props: {
    showUpload:{
      type: Boolean,
      default: false
    }
  },

  setup() {
    // const showUpload = ref(true)
    
    // const data: DataType = reactive({
    //   showUpload: true,
    // })

    // const refData = toRefs(data) 

    const success = (response: any, file: any, fileList: any) => {
      console.log(response);
      console.log(file);
      console.log(fileList);
      // showUpload = false
      // data.showUpload = false;
    }
  // props: {
  //   showUpload: Boolean,
  // },

    // return { ...refData, success }
    return { success }
  },

})

// 当上传成功后设置为 false

</script>