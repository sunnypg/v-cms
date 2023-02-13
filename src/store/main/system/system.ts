import { defineStore } from 'pinia'
import { addUser, deleteUserById, editUser, getUserListData } from '@/service/main/system/system'
import { ElMessage } from 'element-plus'

interface ISystemState {
  userList: any[]
  totalCount: number
}

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    userList: [],
    totalCount: 0
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
    }
  }
})

export default useSystemStore
