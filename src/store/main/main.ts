import { defineStore } from 'pinia'
import { getAllRoles, getAllDepartments, getAllPermission } from '@/service/main/main'

interface IMainState {
  allRoles: any[]
  allDepartments: any[]
  allPermissions: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    allRoles: [],
    allDepartments: [],
    allPermissions: []
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
    },

    // 获取所有权限
    async getAllPermAction() {
      const permissionsList = await getAllPermission()
      this.allPermissions = permissionsList.data.list
    }
  }
})

export default useMainStore
