import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { MyRequestConfig } from './type'

/**
 *  1.对拦截器进行精细控制
 *    > 全局拦截器
 *    > 实例拦截器
 *    > 单次请求拦截器
 *
 *   2.响应结果的类型处理（泛型）
 */

class MyRequest {
  // 成员类型声明
  instance: AxiosInstance

  // 每个 MyRequest 实例对应一个 axios 实例
  constructor(config: MyRequestConfig) {
    this.instance = axios.create(config)

    // 给每一个 instance 实例都添加一个拦截器
    // 请求拦截器(全局)
    this.instance.interceptors.request.use(
      // 请求成功的回调
      (config) => {
        return config
      },
      // 请求失败的回调
      (err) => {
        return err
      }
    )

    // 响应拦截器(全局)
    this.instance.interceptors.response.use(
      // 响应成功的回调
      (res) => {
        return res
      },
      // 响应失败的回调
      (err) => {
        return err
      }
    )

    // // 实例请求拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    // 实例响应拦截器
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  // 封装网络请求的方法
  request<T = any>(config: MyRequestConfig<T>) {
    // 单次请求成功的拦截器
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单次响应成功的拦截器
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default MyRequest
