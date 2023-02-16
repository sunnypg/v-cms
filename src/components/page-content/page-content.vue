<template>
  <div class="user-content">
    <div class="header">
      <h3 class="title">{{ contentConfig?.header?.title ?? '数据列表' }}</h3>
      <el-button v-if="isCreate" type="primary" @click="addClick">{{
        contentConfig?.header?.btnTitle ?? '新建数据'
      }}</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" border style="width: 100%" v-bind="contentConfig.childrenTree">
        <template v-for="item in contentConfig.propsList" :key="item.prop">
          <template v-if="item.type === 'timer'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'handler'">
            <el-table-column v-if="isUpdate || isDelete" align="center" v-bind="item">
              <template #default="scope">
                <el-button
                  v-if="isUpdate"
                  size="small"
                  icon="Edit"
                  type="primary"
                  text
                  @click="editClick(scope.row)"
                  >编辑</el-button
                >
                <el-button
                  v-if="isDelete"
                  size="small"
                  icon="Delete"
                  type="danger"
                  text
                  @click="deleteClick(scope.row.id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </template>
          <!-- 定制化内容 -->
          <template v-else-if="item.type === 'custom'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                <slot :name="item.slotName" v-bind="scope" :prop="item.prop"></slot>
              </template>
            </el-table-column>
          </template>
          <template v-else>
            <el-table-column align="center" v-bind="item" />
          </template>
        </template>
      </el-table>
    </div>
    <div class="pagination" v-if="contentConfig.pageName !== 'menu'">
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
import usePermissions from '@/hooks/usePermissions'

interface Iprops {
  contentConfig: {
    pageName: string
    header: {
      title?: string
      btnTitle?: string
    }
    propsList: any[]
    childrenTree?: any
  }
}

const props = defineProps<Iprops>()

const systemStore = useSystemStore()

// 监听 systemStore 中的 action 被执行了
systemStore.$onAction(({ name, after }) => {
  // after 函数在 action 调用成功后触发
  after(() => {
    if (name === 'addPageAction' || name === 'editPageAction' || name === 'deletePageAction') {
      currentPage.value = 1
    }
  })
})

// 获取按钮权限
const { isCreate, isDelete, isUpdate, isSearch } = usePermissions(props.contentConfig.pageName)

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

// 定义事件
const emit = defineEmits(['addClick', 'editClick'])

// 新建页面数据
function addClick() {
  emit('addClick')
}

// 删除页面数据
function deleteClick(id: number) {
  systemStore.deletePageAction(props.contentConfig.pageName, id)
}

// 编辑页面数据
function editClick(info: any) {
  emit('editClick', info)
}

// 请求页面数据的函数
function getPageList(formData: any = {}) {
  if (!isSearch) return

  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }
  const queryInfo = { ...pageInfo, ...formData }
  console.log(queryInfo)
  systemStore.getPageListAction(props.contentConfig.pageName, queryInfo)
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
