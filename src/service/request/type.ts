import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 对 AxiosRequestConfig 类型进行扩展
export interface MyInterceptors<T = AxiosResponse> {
  // requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestSuccessFn?: (config: any) => any
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface MyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MyInterceptors<T>
}
