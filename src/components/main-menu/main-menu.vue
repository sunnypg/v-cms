<template>
  <div class="main-menu">
    <!-- logo -->
    <div class="logo" @click="toHome">
      <img class="img" src="@/assets/img/logo.svg" alt="" />
      <h2 class="title" v-show="!isFold">电商管理系统</h2>
    </div>
    <!-- 菜单 -->
    <div class="menu">
      <el-menu
        :default-active="defaultActive"
        :collapse="isFold"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
      >
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <!-- 动态组件 component 将字符串转为组件 -->
                <component :is="item.icon.split('el-icon')[1]" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''" @click="handleItemClick(subItem)">{{
                subItem.name
              }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import useLoginStore from '@/store/login/login'
import { useRoute } from 'vue-router'
import { mapPathToMenu } from '@/utils/mapPathToMenu'

// 定义props
defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})

const loginStore = useLoginStore()
const userMenus = loginStore.userMenus

// 点击logo添转主页
function toHome() {
  router.push('/main')
}

// 点击菜单项
function handleItemClick(item: any) {
  router.push(item.url)
}

const route = useRoute()
const pathMenu = mapPathToMenu(route.path, userMenus)
const defaultActive = ref(pathMenu?.id + '')
</script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
