<template>
  <div class="goods">
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
      <template #status="scope">
        <el-tag :type="scope.row[scope.prop] ? 'success' : 'warning'">
          {{ scope.row[scope.prop] ? '已上架' : '未上架' }}
        </el-tag>
      </template>
      <template #imgUrl="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row[scope.prop]"
          :zoom-rate="1.2"
          :preview-src-list="[scope.row[scope.prop]]"
          fit="cover"
          lazy
        />
      </template>
    </page-content>
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
