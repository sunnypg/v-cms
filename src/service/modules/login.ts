import myRequest from '..'

interface ILoginData {
  data: any
  returnCode: string
  success: boolean
}

// 发送网络请求
myRequest
  .request<ILoginData>({
    url: '/entire/list',
    // 单次请求拦截器
    interceptors: {
      // 请求成功
      requestSuccessFn: (config) => {
        console.log('/entire/list请求成功的拦截')
        return config
      },
      // 响应成功
      responseSuccessFn: (res) => {
        console.log('/entire/list响应成功的拦截')
        return res
      }
    }
  })
  .then((res) => {
    console.log(res.data)
  })
