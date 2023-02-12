<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="item in breadcrumb" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useLoginStore from '@/store/login/login'
import { mapPathToBreadcrumb } from '@/utils/mapPathToBreadcrumb'
import { useRoute } from 'vue-router'
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus
const route = useRoute()
const breadcrumb = computed(() => mapPathToBreadcrumb(route.path, userMenus))
console.log(breadcrumb)
</script>

<style lang="less" scoped></style>
