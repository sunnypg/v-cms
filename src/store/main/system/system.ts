import { defineStore } from 'pinia'
import { getUserListData } from '@/service/main/system/system'

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
    }
  }
})

export default useSystemStore
