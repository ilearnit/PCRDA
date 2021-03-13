
<template>
  <el-tabs v-model="editableTabsValue" type="border-card" tab-position="bottom" :closable='closable' :addable='addable' @edit="handleTabsEdit" class="el-card is-always-shadow">
    <el-tab-pane
      :key="item.name"
      v-for="item in editableTabs"
      :label="item.title"
      :name="item.name"
    >
      <TabContent />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { defineComponent, ref} from "vue"

import TabContent  from './TabContent.vue'
export default defineComponent({
  name: "Tabs",
  components: {

    TabContent,
  },    
  data() {  
      const addable = ref(true)
      const closable = ref(true)
      return {
        addable,
        closable,
        editableTabsValue: '1',
        editableTabs: [{
          title: '文件 1',
          name: '1',
        }],
        tabIndex: 1
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
        
            const newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
              title: '文件 ' + newTabName,
              name: newTabName,
            });
            this.editableTabsValue = newTabName;
            
            //  限制 tab 增加的数量
            this.addable = this.editableTabs.length >= 2 ? false : true
            if(this.editableTabs.length >= 1) {
              this.closable = true
            }
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

            // 限制 tab 减少的数量
            if(this.editableTabs.length > 1 ){
              this.editableTabs = tabs.filter(tab => tab.name !== targetName);
            } else {
              this.closable = false
            }

            this.addable = this.editableTabs.length <= 2 ? true : false
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

</style>
