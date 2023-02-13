<template>
  <div class="user-content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <el-button type="primary" @click="addUser">新建用户</el-button>
    </div>
    <div class="table">
      <el-table :data="userList" border style="width: 100%">
        <el-table-column align="center" type="selection" width="50px" />
        <el-table-column align="center" type="index" label="序号" width="60px" />
        <el-table-column align="center" prop="name" label="用户名" width="120px" />
        <el-table-column align="center" prop="realname" label="真实姓名" width="120px" />
        <el-table-column align="center" prop="cellphone" label="手机号" width="120px" />
        <el-table-column align="center" prop="enable" label="状态" width="80px">
          <template #default="scope">
            <el-tag v-if="scope.row.enable">启用</el-tag>
            <el-tag v-else>禁用</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="createAt" label="创建时间">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="updateAt" label="更新时间">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="150px">
          <template #default="scope">
            <el-button size="small" icon="Edit" type="primary" text @click="editClick(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="small"
              icon="Delete"
              type="danger"
              text
              @click="deleteClick(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[5, 10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import useSystemStore from '@/store/main/system/system'
import { formatUTC } from '@/utils/format'

const systemStore = useSystemStore()

// 分页器数据
const currentPage = ref(1)
const pageSize = ref(10)
const totalCount = computed(() => systemStore.totalCount)

// 获取用户列表
getUserList()
const { userList } = storeToRefs(systemStore)

// 每页显示条数改变
function handleSizeChange() {
  getUserList()
}
// 页码改变
function handleCurrentChange() {
  getUserList()
}

const emit = defineEmits(['addUser', 'editUser'])
// 新建用户
function addUser() {
  emit('addUser')
}

// 删除用户
function deleteClick(id: number) {
  systemStore.deleteUserAction(id)
}

// 编辑用户
function editClick(info: any) {
  emit('editUser', info)
}

// 请求用户列表数据的函数
function getUserList(formData: any = {}) {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }
  const queryInfo = { ...pageInfo, ...formData }
  console.log(queryInfo)
  systemStore.getUserListAction(queryInfo)
}

defineExpose({
  getUserList
})
</script>

<style lang="less" scoped>
.user-content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
    .title {
      font-size: 22px;
    }
  }
}
.el-table {
  :deep(.el-table__cell) {
    padding: 12px 0;
  }
}

.pagination {
  margin-top: 10px;
}
</style>
