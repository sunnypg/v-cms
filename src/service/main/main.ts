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

// 获取所有权限
export function getAllPermission() {
  return myRequest.post({
    url: `/menu/list`
  })
}
