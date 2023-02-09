import myRequest from '..'
import type { IAccount } from '@/views/login/types'

export function accountLogin(account: IAccount) {
  return myRequest.post({
    url: '/login',
    data: account
  })
}
