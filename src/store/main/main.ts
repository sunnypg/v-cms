import { defineStore } from 'pinia'
import { getAllRoles, getAllDepartments } from '@/service/main/main'

interface IMainState {
  allRoles: any[]
  allDepartments: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    allRoles: [],
    allDepartments: []
  }),
  actions: {
    // 获取所有角色
    async getAllRolesAction() {
      const roleList = await getAllRoles()
      this.allRoles = roleList.data.list
    },

    // 获取所有部门
    async getAlldepartmentsAction() {
      const departmentList = await getAllDepartments()
      this.allDepartments = departmentList.data.list
    }
  }
})

export default useMainStore
