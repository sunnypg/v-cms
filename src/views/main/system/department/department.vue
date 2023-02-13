<template>
  <div class="department">
    <page-search
      :search-config="searchConfig"
      @search-click="searchClick"
      @reset-click="resetClick"
    />
    <page-content ref="contentRef" @add-click="addPage" @edit-click="editPage" />
    <page-dialog ref="dialogRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import pageSearch from '@/components/page-search/page-search.vue'
import pageContent from './cpns/page-content.vue'
import pageDialog from './cpns/page-dialog.vue'
import searchConfig from './config/search.config'

const contentRef = ref<InstanceType<typeof pageContent>>()
const dialogRef = ref<InstanceType<typeof pageDialog>>()
// 搜索
function searchClick(searchForm: any) {
  contentRef.value?.getPageList(searchForm)
}
// 重置
function resetClick() {
  contentRef.value?.getPageList()
}

// 新增弹窗
function addPage() {
  dialogRef.value!.setDialogVisible()
}

// 编辑弹窗
function editPage(itemData: any) {
  dialogRef.value!.setDialogVisible(false, itemData)
}
</script>

<style scoped></style>
