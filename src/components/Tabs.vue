
<template>
  <el-tabs v-model="editableTabsValue" type="border-card" tab-position="bottom" editable @edit="handleTabsEdit" class="el-card is-always-shadow">
    <el-tab-pane
      :key="item.name"
      v-for="item in editableTabs"
      :label="item.title"
      :name="item.name"
    >
        <UploadFile />
      
        <TableBox showTableBox/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { defineComponent } from "vue"
import TableBox from './TableBox.vue'
import UploadFile from './UploadFile.vue';
export default defineComponent({
  name: "Tabs",
  components: {
    TableBox,
    UploadFile,
  },    
  data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'File Name 1',
          name: '1',
          content: 'File 1 content'
        }, {
          title: 'File Name 2',
          name: '2',
          content: 'File 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          const newTabName = ++this.tabIndex + '';
          console.log(newTabName);
          this.editableTabs.push({
            title: 'New Tab xxxxxxxxxxxxxxxxxx',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          const tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                const nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
  })
</script>

<style>
.el-tabs__new-tab {
  margin: 10px 15px 0px 10px;
}

.el-tabs--bottom .el-tabs__header.is-bottom {
  margin: 0px;
}

.el-tabs--border-card>.el-tabs__content {
    padding: 15px 15px 0px 15px;
}   

</style>
