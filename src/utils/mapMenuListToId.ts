export function mapMenuListToId(menuList: any[]) {
  const ids: number[] = []

  function getIds(menus: any[]) {
    for (const item of menus) {
      if (item.children) {
        getIds(item.children)
      } else {
        ids.push(item.id)
      }
    }
  }

  getIds(menuList)

  return ids
}
