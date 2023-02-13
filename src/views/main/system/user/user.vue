<template>
  <div class="user">
    <div class="content">
      <user-search @search-click="searchClick" @reset-click="resetClick" />
      <user-content ref="contentRef" @add-user="addUser" @edit-user="editUser" />
      <user-dialog ref="dialogRef" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userSearch from './cpns/user-search.vue'
import userContent from './cpns/user-content.vue'
import userDialog from './cpns/user-dialog.vue'

const contentRef = ref<InstanceType<typeof userContent>>()
const dialogRef = ref<InstanceType<typeof userDialog>>()
// 搜索
function searchClick(searchForm: any) {
  contentRef.value?.getUserList(searchForm)
}
// 重置
function resetClick() {
  contentRef.value?.getUserList()
}

// 新增弹窗
function addUser() {
  dialogRef.value!.setDialogVisible()
}

// 编辑弹窗
function editUser(itemData: any) {
  dialogRef.value!.setDialogVisible(false, itemData)
}
</script>
<style scoped lang="less"></style>
