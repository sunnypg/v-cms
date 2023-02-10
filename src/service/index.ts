import { myLocalStorage } from '@/utils/storage'
import { BASE_URL, TIME_OUT } from './config'
import MyRequest from './request'

const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 实例拦截器
  interceptors: {
    // 请求成功
    requestSuccessFn: (config) => {
      const token = myLocalStorage.getStorage('token')
      if (config.headers && token) {
        config.headers.Authorization = 'Bearer ' + token
      }

      return config
    },
    // 请求失败
    requestFailureFn: (err) => {
      return err
    },
    // 响应成功
    responseSuccessFn: (res) => {
      return res.data
    },
    // 响应失败
    responseFailureFn: (err) => {
      return err
    }
  }
})

export default myRequest
