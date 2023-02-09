<template>
  <div class="panel-account">
    <el-form :model="accountForm" label-width="60px" :rules="accountRules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
import useLoginStore from '@/store/login/login'
import type { IAccount } from '../types/index'
import { myLocalStorage } from '@/utils/storage'

const accountForm = reactive<IAccount>({
  name: myLocalStorage.getStorage('name') ?? '',
  password: myLocalStorage.getStorage('password') ?? ''
})

// 表单校验规则
const accountRules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { pattern: /^[a-z0-9]{5,10}$/, message: '应该为5-10位的字母或数字', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,20}$/, message: '应该为6-20位的字母或数字', trigger: 'blur' }
  ]
})

// 登录
const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
function login(keepPassword: boolean) {
  formRef.value!.validate((valid) => {
    if (valid) {
      const name = accountForm.name
      const password = accountForm.password

      loginStore.accountLoginAction({ name, password }).then(() => {
        if (keepPassword) {
          myLocalStorage.setStorage('name', name)
          myLocalStorage.setStorage('password', password)
        } else {
          myLocalStorage.deleteStorage('name')
          myLocalStorage.deleteStorage('password')
        }
      })
    } else {
      ElMessage.error('请输入正确格式的账号或密码')
    }
  })
}

defineExpose({
  login
})
</script>

<style lang="less" scoped></style>
