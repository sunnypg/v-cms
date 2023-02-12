<template>
  <div class="user">
    <div class="content">
      <user-search @search-click="searchClick" @reset-click="resetClick" />
      <user-content ref="contentRef" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userSearch from './cpns/user-search.vue'
import userContent from './cpns/user-content.vue'

const contentRef = ref<InstanceType<typeof userContent>>()
// 搜索
function searchClick(searchForm: any) {
  contentRef.value?.getUserList(searchForm)
}
// 重置
function resetClick() {
  contentRef.value?.getUserList()
}
</script>
<style scoped lang="less"></style>
