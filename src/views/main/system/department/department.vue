<template>
  <div class="department">
    <page-search
      :search-config="searchConfig"
      @search-click="searchClick"
      @reset-click="resetClick"
    />
    <page-content
      ref="contentRef"
      @add-click="addPage"
      @edit-click="editPage"
      :content-config="contentConfig"
    >
      <template #leader="scope">部门主管: {{ scope.row[scope.prop] }}</template>
      <template #parent="scope">上级领导: {{ scope.row[scope.prop] }}</template>
    </page-content>
    <page-dialog ref="dialogRef" :dialog-config="dialogConfigRef" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import pageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'
import pageDialog from '@/components/page-dialog/page-dialog.vue'
import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import dialogConfig from './config/dialog.config'
import useMainStore from '@/store/main/main'
import usePageContent from '@/hooks/usePageContent'
import usePageDialog from '@/hooks/usePageDialog'

// 对 dialogConfig 进行操作
const dialogConfigRef = computed(() => {
  const mainStore = useMainStore()
  const departments = mainStore.allDepartments.map((item) => {
    return { label: item.name, value: item.id }
  })
  dialogConfig.formItems.forEach((item) => {
    if (item.prop === 'parentId') {
      item.options?.push(...departments)
    }
  })
  return dialogConfig
})

// 搜索、重置的hooks
const { contentRef, searchClick, resetClick } = usePageContent()

// 新增、编辑的hooks
const { dialogRef, addPage, editPage } = usePageDialog()
</script>

<style scoped></style>
