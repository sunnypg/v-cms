<template>
  <div class="user-dialog">
    <el-dialog
      v-model="dialogVisible"
      :title="isNew ? `新增${dialogConfig.header.title}` : `编辑${dialogConfig.header.title}`"
      width="30%"
    >
      <!-- 表单 -->
      <div class="form">
        <el-form :model="formData" :label-width="dialogConfig.labelWidth ?? '80px'">
          <template v-for="item in dialogConfig.formItems" :key="item.prop">
            <template v-if="item.type === 'select'">
              <el-form-item v-bind="item">
                <el-select v-model="formData[item.prop]" :placeholder="item.placeholder">
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value"
                  /></template>
                </el-select>
              </el-form-item>
            </template>
            <template v-else>
              <el-form-item v-bind="item">
                <el-input v-model="formData[item.prop]" :placeholder="item.placeholder" />
              </el-form-item>
            </template>
          </template>
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
import useSystemStore from '@/store/main/system/system'
// import type { IDialogProps } from './type'

interface IDialogProps {
  dialogConfig: {
    pageName: string
    header: {
      title: string
    }
    labelWidth?: string
    formItems: any[]
  }
}

const props = defineProps<IDialogProps>()

const systemStore = useSystemStore()

const dialogVisible = ref(false)
const isNew = ref(true)
const editData = ref()

// 定义form的数据
const initForm: any = {}
for (const item of props.dialogConfig.formItems) {
  initForm[item.prop] = item.initValue ?? ''
}
const formData = reactive(initForm)

// 确定按钮
function confirmClick() {
  if (!isNew.value && editData.value) {
    // 编辑
    systemStore.editPageAction(props.dialogConfig.pageName, editData.value.id, formData)
  } else {
    // 新增
    systemStore.addPageAction(props.dialogConfig.pageName, formData)
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
      // 设置初始化值
      const item = props.dialogConfig.formItems.find((item: any) => item.prop === key)
      formData[key] = item ? item.initValue : ''
    }
    editData.value = null
  }
}
defineExpose({
  setDialogVisible
})
</script>

<style lang="less" scoped></style>
