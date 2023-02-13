<template>
  <div class="user-search">
    <!-- 搜索的表单 -->
    <el-form :model="searchForm" label-width="80px" size="large" ref="formRef">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="部门名称" prop="name">
            <el-input v-model="searchForm.name" placeholder="请输入部门名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="部门主管" prop="leader">
            <el-input v-model="searchForm.leader" placeholder="请输入部门主管"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="日期" prop="creatAt">
            <el-date-picker
              v-model="searchForm.creatAt"
              type="daterange"
              range-separator="—"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
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
const searchForm = reactive({
  name: '',
  leader: '',
  creatAt: ''
})
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
