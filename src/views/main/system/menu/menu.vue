<template>
  <div class="menu">
    <page-content
      :content-config="contentConfig"
      ref="contentRef"
      @add-click="addPage"
      @edit-click="editPage"
    />
    <page-dialog ref="dialogRef" :dialog-config="dialogConfig" />
  </div>
</template>

<script setup lang="ts">
// 组件
import pageContent from '@/components/page-content/page-content.vue'
import pageDialog from '@/components/page-dialog/page-dialog.vue'
// 配置
import contentConfig from './config/content.config'
import dialogConfig from './config/dialog.config'
// hooks
import usePageDialog from '@/hooks/usePageDialog'

// 新增、编辑的hooks
const { dialogRef, addPage, editPage } = usePageDialog()
</script>

<style scoped></style>
