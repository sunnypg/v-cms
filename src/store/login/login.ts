import { defineStore } from 'pinia'
import { accountLogin, getUserInfoById, getUserMenuByRoleId } from '@/service/login/login'
import type { IAccount } from '@/views/login/types'
import { myLocalStorage } from '@/utils/storage'
import router from '@/router'
import { dynamicRoute } from '@/utils/dynamicRoute'
import useMainStore from '@/store/main/main'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  // 为 state 指定类型
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: []
  }),
  actions: {
    // 登录
    async accountLoginAction(account: IAccount) {
      // 登录获取token
      const loginResult = await accountLogin(account)
      const id = loginResult.data.id
      this.token = loginResult.data.token

      // 本地缓存
      myLocalStorage.setStorage('token', this.token)

      // 获取用户信息
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo

      // 获取用户权限下的菜单
      const userMenusResult = await getUserMenuByRoleId(this.userInfo.role.id)
      const userMenus = userMenusResult.data
      this.userMenus = userMenus

      myLocalStorage.setStorage('userInfo', userInfo)
      myLocalStorage.setStorage('userMenus', userMenus)

      const mainStore = useMainStore()
      mainStore.getAllRolesAction()
      mainStore.getAlldepartmentsAction()
      mainStore.getAllPermAction()

      // 动态添加路由
      dynamicRoute(userMenus)

      // 页面跳转
      router.push('/main')
    },

    // 获取缓存数据（用户进行刷新默认加载数据）
    LocalStorageAction() {
      const token = myLocalStorage.getStorage('token')
      const userInfo = myLocalStorage.getStorage('userInfo')
      const userMenus = myLocalStorage.getStorage('userMenus')
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus

        const mainStore = useMainStore()
        mainStore.getAllRolesAction()
        mainStore.getAlldepartmentsAction()
        mainStore.getAllPermAction()

        // 动态添加路由
        dynamicRoute(userMenus)
      }
    }
  }
})

export default useLoginStore
