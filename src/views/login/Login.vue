<template>
  <div class="login">
    <h2>login</h2>
  </div>
</template>

<script setup lang="ts">
import myRequest from '@/service'
// 发送网络请求
myRequest
  .request({
    url: '/entire/list',
    // 独有拦截器
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
</script>

<style lang="less" scoped></style>
