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
