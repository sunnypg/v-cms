<template>
  <div class="main-header">
    <div class="menu-icon" @click="iconChange">
      <el-icon size="30px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <HeaderBreadcrumb />
      <HeaderInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 自定义事件
const emit = defineEmits(['foldChanged'])

const isFold = ref(false)
function iconChange() {
  // 1.内部改变状态
  isFold.value = !isFold.value

  // 2.将事件和状态传递给父组件
  emit('foldChanged', isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
