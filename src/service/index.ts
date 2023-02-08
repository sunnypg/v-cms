import { BASE_URL, TIME_OUT } from './config'
import MyRequest from './request'

const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 实例拦截器
  interceptors: {
    // 请求成功
    requestSuccessFn: (config) => {
      console.log('局部请求成功的拦截')
      return config
    },
    // 请求失败
    requestFailureFn: (err) => {
      console.log('局部请求失败的拦截')
      return err
    },
    // 响应成功
    responseSuccessFn: (res) => {
      console.log('局部响应成功的拦截')
      return res
    },
    // 响应失败
    responseFailureFn: (err) => {
      console.log('局部响应失败的拦截')
      return err
    }
  }
})

export default myRequest
