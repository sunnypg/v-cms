import { defineStore } from 'pinia'
import { accountLogin } from '@/service/login/login'
import type { IAccount } from '@/views/login/types'
import { myLocalStorage } from '@/utils/storage'
import router from '@/router'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: myLocalStorage.getStorage('token') ?? '',
    name: ''
  }),
  actions: {
    // 登录
    async accountLoginAction(account: IAccount) {
      const res = await accountLogin(account)
      this.id = res.data.data.id
      this.token = res.data.data.token
      this.name = res.data.data.name

      // 本地缓存
      myLocalStorage.setStorage('token', this.token)

      // 页面跳转
      router.push('/main')
    }
  }
})

export default useLoginStore
