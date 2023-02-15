<template>
  <div class="user-search" v-if="isSearch">
    <!-- 搜索的表单 -->
    <el-form
      :model="searchForm"
      :label-width="searchConfig.labelWidth ?? '80px'"
      size="large"
      ref="formRef"
    >
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItems" :key="item.prop">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input v-model="searchForm[item.prop]" :placeholder="item.placeholder" />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  v-model="searchForm[item.prop]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value"></el-option>
                  </template>
                </el-select>
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="searchForm[item.prop]"
                  type="daterange"
                  range-separator="—"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <!-- 重置按钮 -->
    <div class="btn">
      <el-button size="large" icon="Refresh" @click="reset">重置</el-button>
      <el-button size="large" type="primary" icon="Search" @click="search">搜索</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { ref, reactive } from 'vue'
import usePermissions from '@/hooks/usePermissions'

interface Iprops {
  searchConfig: {
    pageName: string
    labelWidth?: string
    formItems: any[]
  }
}
const props = defineProps<Iprops>()

// 获取按钮权限
const { isSearch } = usePermissions(props.searchConfig.pageName)

// 定义form的数据
const initForm: any = {}
for (const item of props.searchConfig.formItems) {
  if (item.prop) initForm[item.prop] = item.initValue ?? ''
}
const searchForm = reactive(initForm)

// 自定义事件
const emit = defineEmits(['searchClick', 'resetClick'])
const formRef = ref<InstanceType<typeof ElForm>>()
// 重置
function reset() {
  formRef.value?.resetFields()
  emit('resetClick')
}
// 搜索
function search() {
  emit('searchClick', searchForm)
}
</script>

<style lang="less" scoped>
.user-search {
  background-color: #fff;
  padding: 20px;
  .el-form-item {
    padding: 20px;
    margin-bottom: 0;
  }
  .btn {
    text-align: right;
    padding: 0 50px 10px 0;
  }
}
</style>
