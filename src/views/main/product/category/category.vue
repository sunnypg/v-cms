<template>
  <div class="category">
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
    />
    <page-dialog ref="dialogRef" :dialog-config="dialogConfig" />
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'
import pageDialog from '@/components/page-dialog/page-dialog.vue'
import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import dialogConfig from './config/dialog.config'
import usePageContent from '@/hooks/usePageContent'
import usePageDialog from '@/hooks/usePageDialog'

// 搜索、重置的hooks
const { contentRef, searchClick, resetClick } = usePageContent()

// 新增、编辑的hooks
const { dialogRef, addPage, editPage } = usePageDialog()
</script>

<style scoped></style>
