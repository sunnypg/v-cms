<template>
  <div class="user-content">
    <div class="header">
      <h3 class="title">部门列表</h3>
      <el-button type="primary" @click="addUser">新建部门</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" border style="width: 100%">
        <el-table-column align="center" type="selection" width="50px" />
        <el-table-column align="center" type="index" label="序号" width="60px" />
        <el-table-column align="center" prop="name" label="部门名称" width="120px" />
        <el-table-column align="center" prop="leader" label="部门主管" width="120px" />
        <el-table-column align="center" prop="parentId" label="上级部门" width="120px" />
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
        :total="pageTotalCount"
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
const pageTotalCount = computed(() => systemStore.pageTotalCount)

// 获取页面数据
getPageList()
const { pageList } = storeToRefs(systemStore)

// 每页显示条数改变
function handleSizeChange() {
  getPageList()
}
// 页码改变
function handleCurrentChange() {
  getPageList()
}

const emit = defineEmits(['addClick', 'editClick'])
// 新建页面数据
function addUser() {
  emit('addClick')
}

// 删除页面数据
function deleteClick(id: number) {
  systemStore.deletePageAction('department', id)
}

// 编辑页面数据
function editClick(info: any) {
  emit('editClick', info)
}

// 请求页面数据的函数
function getPageList(formData: any = {}) {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }
  const queryInfo = { ...pageInfo, ...formData }
  console.log(queryInfo)
  systemStore.getPageListAction('department', queryInfo)
}

defineExpose({
  getPageList
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
