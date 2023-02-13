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
