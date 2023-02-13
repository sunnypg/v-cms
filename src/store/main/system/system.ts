import { defineStore } from 'pinia'
import {
  addUser,
  deleteUserById,
  editUser,
  getUserListData,
  getPageListData,
  addPage,
  deletePageById,
  editPage
} from '@/service/main/system/system'
import { ElMessage } from 'element-plus'

interface ISystemState {
  userList: any[]
  totalCount: number
  pageList: any[]
  pageTotalCount: number
}

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    userList: [],
    totalCount: 0,
    pageList: [],
    pageTotalCount: 0
  }),
  actions: {
    // 获取用户列表
    async getUserListAction(queryInfo: any) {
      const userList = await getUserListData(queryInfo)
      const { totalCount, list } = userList.data
      this.totalCount = totalCount
      this.userList = list
    },

    // 新增用户
    async addUserAction(userInfo: any) {
      const res = await addUser(userInfo)
      // 重新获取用户列表
      this.getUserListAction({ offset: 0, size: 10 })
      ElMessage({
        message: res.data,
        type: 'success'
      })
    },

    // 删除用户
    async deleteUserAction(id: number) {
      const res = await deleteUserById(id)
      // 重新获取用户列表
      this.getUserListAction({ offset: 0, size: 10 })
      ElMessage({
        message: res.data,
        type: 'success'
      })
    },

    // 编辑用户
    async editUserAction(id: number, userinfo: any) {
      const res = await editUser(id, userinfo)
      // 重新获取用户列表
      this.getUserListAction({ offset: 0, size: 10 })
      ElMessage({
        message: res.data,
        type: 'success'
      })
    },

    // 获取页面数据列表
    async getPageListAction(pageName: string, queryInfo: any) {
      const pageListResult = await getPageListData(pageName, queryInfo)
      const { totalCount, list } = pageListResult.data
      this.pageList = list
      this.pageTotalCount = totalCount
    },

    // 新增页面数据
    async addPageAction(pageName: string, userInfo: any) {
      const res = await addPage(pageName, userInfo)
      // 重新获取页面数据
      this.getPageListAction(pageName, { offset: 0, size: 10 })
      ElMessage({
        message: res.data,
        type: 'success'
      })
    },

    // 删除页面数据
    async deletePageAction(pageName: string, id: number) {
      const res = await deletePageById(pageName, id)
      // 重新获取页面数据
      this.getPageListAction(pageName, { offset: 0, size: 10 })
      ElMessage({
        message: res.data,
        type: 'success'
      })
    },

    // 编辑页面数据
    async editPageAction(pageName: string, id: number, userinfo: any) {
      const res = await editPage(pageName, id, userinfo)
      // 重新获取页面数据
      this.getPageListAction(pageName, { offset: 0, size: 10 })
      ElMessage({
        message: res.data,
        type: 'success'
      })
    }
  }
})

export default useSystemStore
