import myRequest from '@/service'

// 获取用户列表
export function getUserListData(queryInfo: any) {
  return myRequest.post({
    url: '/users/list',
    data: {
      offset: queryInfo.offset,
      size: queryInfo.size,
      name: queryInfo.name,
      realname: queryInfo.realname,
      cellphone: queryInfo.cellphone,
      enable: queryInfo.enable,
      createAt: queryInfo.createAt
    }
  })
}

// 新增用户
export function addUser(userInfo: any) {
  return myRequest.post({
    url: `/users`,
    data: userInfo
  })
}

// 删除用户
export function deleteUserById(id: number) {
  return myRequest.delete({
    url: `/users/${id}`
  })
}

// 编辑用户
export function editUser(id: number, userinfo: any) {
  return myRequest.patch({
    url: `/users/${id}`,
    data: userinfo
  })
}

// 获取页面数据列表
export function getPageListData(pageName: string, queryInfo: any) {
  return myRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}

// 新增页面数据
export function addPage(pageName: string, addInfo: any) {
  return myRequest.post({
    url: `/${pageName}`,
    data: addInfo
  })
}

// 删除页面数据
export function deletePageById(pageName: string, id: number) {
  return myRequest.delete({
    url: `/${pageName}/${id}`
  })
}

// 编辑页面数据
export function editPage(pageName: string, id: number, editInfo: any) {
  return myRequest.patch({
    url: `/${pageName}/${id}`,
    data: editInfo
  })
}
