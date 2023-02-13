import myRequest from '@/service'

// 获取所有角色
export function getAllRoles() {
  return myRequest.post({
    url: `/role/list`
  })
}

// 获取所有部门
export function getAllDepartments() {
  return myRequest.post({
    url: `/department/list`
  })
}
