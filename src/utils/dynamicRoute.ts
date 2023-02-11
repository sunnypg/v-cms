import router from '@/router'
import type { RouteRecordRaw } from 'vue-router'

export function dynamicRoute(userMenus: any[]) {
  const localRoutes: RouteRecordRaw[] = []
  // 读取组件
  const files: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', {
    eager: true
  })
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }

  // 根据菜单权限添加路由
  for (const menu of userMenus) {
    for (const subMenu of menu.children) {
      const route = localRoutes.find((item) => item.path === subMenu.url)
      if (route) router.addRoute('main', route)
    }
  }
}
