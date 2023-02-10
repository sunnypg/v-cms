import myRequest from '..'
import type { IAccount } from '@/views/login/types'

// 登录
export function accountLogin(account: IAccount) {
  return myRequest.post({
    url: '/login',
    data: account
  })
}

// 获取用户信息
export function getUserInfoById(id: number) {
  return myRequest.get({
    url: `/users/${id}`
  })
}

// 获取菜单信息
export function getUserMenuByRoleId(id: number) {
  return myRequest.get({
    url: `/role/${id}/menu`
  })
}
