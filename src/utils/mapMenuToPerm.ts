export default function mapMenuToPerm(menuList: any) {
  const permissions: string[] = []

  function getPerm(menuList: any) {
    for (const menu of menuList) {
      if (menu.type === 3) {
        permissions.push(menu.permission)
      } else {
        getPerm(menu.children ?? [])
      }
    }
  }

  getPerm(menuList)

  return permissions
}
