<template>
  <div class="role">
    <page-search
      :search-config="searchConfig"
      @search-click="searchClick"
      @reset-click="resetClick"
    />
    <page-content
      :content-config="contentConfig"
      ref="contentRef"
      @add-click="addPage"
      @edit-click="editPage"
    />
    <page-dialog ref="dialogRef" :dialog-config="dialogConfig" :other-info="otherInfo">
      <template #perm>
        <el-tree
          ref="treeRef"
          :data="allPermissions"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheck"
        />
      </template>
    </page-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
// 组件
import pageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'
import pageDialog from '@/components/page-dialog/page-dialog.vue'
// 配置
import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import dialogConfig from './config/dialog.config'
// hooks
import usePageContent from '@/hooks/usePageContent'
import usePageDialog from '@/hooks/usePageDialog'

import useMainStore from '@/store/main/main'
import { storeToRefs } from 'pinia'
import type { ElTree } from 'element-plus'
import { mapMenuListToId } from '@/utils/mapMenuListToId'

const treeRef = ref<InstanceType<typeof ElTree>>()

const mainStore = useMainStore()
const { allPermissions } = storeToRefs(mainStore)

const otherInfo = ref({})

function handleCheck(data1: any, data2: any) {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuList }
}

// 搜索、重置的hooks
const { contentRef, searchClick, resetClick } = usePageContent()

// 新增、编辑的hooks
const { dialogRef, addPage, editPage } = usePageDialog(editCallback)

function editCallback(itemData: any) {
  const menuIds = mapMenuListToId(itemData.menuList)
  nextTick(() => {
    treeRef.value?.setCheckedKeys(menuIds)
  })
}
</script>
<style scoped lang="less"></style>
