<template>
  <div class="user-dialog">
    <el-dialog v-model="dialogVisible" :title="isNew ? '新增用户' : '编辑用户'" width="30%">
      <!-- 表单 -->
      <div class="form">
        <el-form :model="formData" label-width="80px">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="formData.name" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="真实姓名">
            <el-input v-model="formData.realname" placeholder="请输入真实姓名" />
          </el-form-item>
          <el-form-item label="密码" prop="password" v-if="isNew">
            <el-input show-password v-model="formData.password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item label="手机号" prop="cellphone">
            <el-input v-model="formData.cellphone" placeholder="请输入手机号" />
          </el-form-item>
          <el-form-item label="角色" prop="roleId">
            <el-select v-model="formData.roleId" placeholder="请选择角色">
              <template v-for="item in allRoles" :key="item.id">
                <el-option :label="item.name" :value="item.id"
              /></template>
            </el-select>
          </el-form-item>
          <el-form-item label="部门" prop="departmentId">
            <el-select v-model="formData.departmentId" placeholder="请选择部门">
              <template v-for="item in allDepartments" :key="item.id">
                <el-option :label="item.name" :value="item.id"
              /></template>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <!-- 底部 -->
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">关闭</el-button>
          <el-button type="primary" @click="confirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'

const mainStore = useMainStore()
const systemStore = useSystemStore()
const { allRoles, allDepartments } = storeToRefs(mainStore)

const dialogVisible = ref(false)
const isNew = ref(true)
const editData = ref()
const formData = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})

// 确定按钮
function confirmClick() {
  if (!isNew.value && editData.value) {
    // 编辑
    systemStore.editUserAction(editData.value.id, formData)
  } else {
    // 新增
    systemStore.addUserAction(formData)
  }
  dialogVisible.value = false
}

function setDialogVisible(isAdd: boolean = true, itemData?: any) {
  dialogVisible.value = true
  isNew.value = isAdd
  if (!isAdd && itemData) {
    // 编辑
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    // 新增
    for (const key in formData) {
      formData[key] = ''
    }
  }
}
defineExpose({
  setDialogVisible
})
</script>

<style lang="less" scoped></style>
