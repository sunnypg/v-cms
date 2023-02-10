import { defineStore } from 'pinia'
import { accountLogin, getUserInfoById, getUserMenuByRoleId } from '@/service/login/login'
import type { IAccount } from '@/views/login/types'
import { myLocalStorage } from '@/utils/storage'
import router from '@/router'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  // 为 state 指定类型
  state: (): ILoginState => ({
    token: myLocalStorage.getStorage('token') ?? '',
    userInfo: myLocalStorage.getStorage('userInfo') ?? {},
    userMenus: myLocalStorage.getStorage('userMenus') ?? []
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

      // 页面跳转
      router.push('/main')
    }
  }
})

export default useLoginStore
