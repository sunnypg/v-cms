<template>
  <div class="login-panel">
    <h1 class="title">电商管理系统</h1>
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
          <panel-account ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <div class="label">
              <el-icon><Iphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <panel-phone ref="phoneRef" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="keepPassword" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" size="large" @click="login">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { myLocalStorage } from '@/utils/storage'
import { ref, watch } from 'vue'
import panelAccount from './panel-account.vue'
import panelPhone from './panel-phone.vue'

const keepPassword = ref<boolean>(myLocalStorage.getStorage('keepPassword') ?? false)
const activeName = ref('account')
const accountRef = ref<InstanceType<typeof panelAccount>>()
const phoneRef = ref<InstanceType<typeof panelPhone>>()

watch(keepPassword, (newValue) => {
  // myLocalStorage.setStorage('keepPassword', newValue)
  localStorage.setItem('keepPassword', JSON.stringify(newValue))
})

// 登录
function login() {
  if (activeName.value === 'account') {
    accountRef.value!.login(keepPassword.value)
  } else {
    phoneRef.value!.login(keepPassword.value)
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;
  .title {
    text-align: center;
    margin-bottom: 15px;
  }
  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      margin-left: 5px;
    }
  }
  .controls {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    margin-top: 10px;
    width: 100%;
    // --el-button-size: 50px;
  }
}
</style>
