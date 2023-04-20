import Mock from 'mockjs'

import login from './data/login'
import system from './data/system'
import product from './data/product'
import echart from './data/echart'

// 模拟网络延迟
Mock.setup({ timeout: '100-200' })

const routeList = [...login, ...system, ...product, ...echart]

routeList.forEach((route) => {
  Mock.mock(route.url, route.method == 'undefined' ? 'get' : route.method, route.tpl)
})

export default Mock
