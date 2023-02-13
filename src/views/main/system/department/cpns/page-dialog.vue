<template>
  <div class="user-dialog">
    <el-dialog v-model="dialogVisible" :title="isNew ? '新增部门' : '编辑部门'" width="30%">
      <!-- 表单 -->
      <div class="form">
        <el-form :model="formData" label-width="80px">
          <el-form-item label="部门名称" prop="name">
            <el-input v-model="formData.name" placeholder="请输入部门名称" />
          </el-form-item>
          <el-form-item label="部门主管" prop="leader">
            <el-input v-model="formData.leader" placeholder="请输入部门主管" />
          </el-form-item>
          <el-form-item label="上级部门" prop="parentId">
            <el-select v-model="formData.parentId" placeholder="请选择上级部门">
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
const { allDepartments } = storeToRefs(mainStore)

const dialogVisible = ref(false)
const isNew = ref(true)
const editData = ref()
const formData = reactive<any>({
  name: '',
  leader: '',
  parentId: ''
})

// 确定按钮
function confirmClick() {
  if (!isNew.value && editData.value) {
    // 编辑
    systemStore.editPageAction('department', editData.value.id, formData)
  } else {
    // 新增
    systemStore.addPageAction('department', formData)
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
