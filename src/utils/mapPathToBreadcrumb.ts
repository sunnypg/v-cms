export function mapPathToBreadcrumb(path: string, userMenus: any[]) {
  const breadcrumb: any[] = []
  for (const menu of userMenus) {
    for (const subMenu of menu.children) {
      if (subMenu.url === path) {
        // 获取面包屑的信息
        breadcrumb.push({ name: menu.name, path: menu.url })
        breadcrumb.push({ name: subMenu.name, path: subMenu.url })
      }
    }
  }
  return breadcrumb
}
