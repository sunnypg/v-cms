const login: any[] = [
  {
    url: new RegExp('/login'),
    method: 'post',
    tpl: {
      code: 200,
      msg: 'success',
      data: {
        id: 1,
        token: 'token'
      }
    }
  },
  {
    url: new RegExp('/users/1'),
    method: 'get',
    tpl: {
      code: 200,
      msg: 'success',
      data: {
        id: 1,
        name: 'coderwhy',
        realname: 'coderwhy',
        cellphone: '18812345678',
        enable: 1,
        creatAt: null,
        updateAt: null,
        role: {
          id: 1,
          name: '超级管理员',
          intro: '所有权限',
          creatAt: null,
          updateAt: null
        },
        department: {
          id: 1,
          name: '总裁办',
          parentId: null,
          leader: 'coderwhy',
          creatAt: null,
          updateAt: null
        }
      }
    }
  },
  {
    url: new RegExp('/role/1/menu'),
    method: 'get',
    tpl: {
      code: 200,
      msg: 'success',
      data: [
        {
          id: 1,
          name: '系统总览',
          type: 1,
          url: '/main/analysis',
          icon: 'el-icon-monitor',
          sort: 1,
          children: [
            {
              id: 101,
              name: '核心技术',
              type: 2,
              url: '/main/analysis/overview',
              sort: 100,
              children: null,
              parentId: 1
            },
            {
              id: 102,
              name: '商品统计',
              type: 2,
              url: '/main/analysis/dashboard',
              sort: 101,
              children: null,
              parentId: 1
            }
          ]
        },
        {
          id: 2,
          name: '系统管理',
          type: 1,
          url: '/main/system',
          icon: 'el-icon-setting',
          sort: 1,
          children: [
            {
              id: 103,
              name: '用户管理',
              type: 2,
              url: '/main/system/user',
              sort: 100,
              children: [
                {
                  id: 1,
                  url: null,
                  name: '创建用户',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:users:create'
                },
                {
                  id: 2,
                  url: null,
                  name: '删除用户',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:users:delete'
                },
                {
                  id: 3,
                  url: null,
                  name: '编辑用户',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:users:update'
                },
                {
                  id: 4,
                  url: null,
                  name: '查询用户',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:users:query'
                }
              ],
              parentId: 2
            },
            {
              id: 104,
              name: '部门管理',
              type: 2,
              url: '/main/system/department',
              sort: 101,
              children: [
                {
                  id: 1,
                  url: null,
                  name: '创建部门',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:department:create'
                },
                {
                  id: 2,
                  url: null,
                  name: '删除部门',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:department:delete'
                },
                {
                  id: 3,
                  url: null,
                  name: '编辑部门',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:department:update'
                },
                {
                  id: 4,
                  url: null,
                  name: '查询部门',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:department:query'
                }
              ],
              parentId: 2
            },
            {
              id: 105,
              name: '菜单管理',
              type: 2,
              url: '/main/system/menu',
              sort: 101,
              children: [
                {
                  id: 1,
                  url: null,
                  name: '创建菜单',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:menu:create'
                },
                {
                  id: 2,
                  url: null,
                  name: '删除菜单',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:menu:delete'
                },
                {
                  id: 3,
                  url: null,
                  name: '编辑菜单',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:menu:update'
                },
                {
                  id: 4,
                  url: null,
                  name: '查询菜单',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:menu:query'
                }
              ],
              parentId: 2
            },
            {
              id: 106,
              name: '角色管理',
              type: 2,
              url: '/main/system/role',
              sort: 101,
              children: [
                {
                  id: 1,
                  url: null,
                  name: '创建角色',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:role:create'
                },
                {
                  id: 2,
                  url: null,
                  name: '删除角色',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:role:delete'
                },
                {
                  id: 3,
                  url: null,
                  name: '编辑角色',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:role:update'
                },
                {
                  id: 4,
                  url: null,
                  name: '查询角色',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'system:role:query'
                }
              ],
              parentId: 2
            }
          ]
        },
        {
          id: 3,
          name: '商品管理',
          type: 1,
          url: '/main/product',
          icon: 'el-icon-goods',
          sort: 1,
          children: [
            {
              id: 107,
              name: '商品分类',
              type: 2,
              url: '/main/product/category',
              sort: 100,
              children: [
                {
                  id: 1,
                  url: null,
                  name: '创建分类',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'product:category:create'
                },
                {
                  id: 2,
                  url: null,
                  name: '删除分类',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'product:category:delete'
                },
                {
                  id: 3,
                  url: null,
                  name: '编辑分类',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'product:category:update'
                },
                {
                  id: 4,
                  url: null,
                  name: '查询分类',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'product:category:query'
                }
              ],
              parentId: 3
            },
            {
              id: 108,
              name: '商品信息',
              type: 2,
              url: '/main/product/goods',
              sort: 101,
              children: [
                {
                  id: 1,
                  url: null,
                  name: '创建商品',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'product:goods:create'
                },
                {
                  id: 2,
                  url: null,
                  name: '删除商品',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'product:goods:delete'
                },
                {
                  id: 3,
                  url: null,
                  name: '编辑商品',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'product:goods:update'
                },
                {
                  id: 4,
                  url: null,
                  name: '查询商品',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'product:goods:query'
                }
              ],
              parentId: 3
            }
          ]
        },
        {
          id: 4,
          name: '夜间故事',
          type: 1,
          url: '/main/story',
          icon: 'el-icon-alarm-clock',
          sort: 1,
          children: [
            {
              id: 109,
              name: '聊聊',
              type: 2,
              url: '/main/story/chat',
              sort: 100,
              children: null,
              parentId: 4
            },
            {
              id: 110,
              name: '故事列表',
              type: 2,
              url: '/main/story/list',
              sort: 101,
              children: [
                {
                  id: 1,
                  url: null,
                  name: '创建故事',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'story:list:create'
                },
                {
                  id: 2,
                  url: null,
                  name: '删除故事',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'story:list:delete'
                },
                {
                  id: 3,
                  url: null,
                  name: '编辑故事',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'story:list:update'
                },
                {
                  id: 4,
                  url: null,
                  name: '查询故事',
                  sort: null,
                  type: 3,
                  parentId: 1,
                  permission: 'story:list:query'
                }
              ],
              parentId: 4
            }
          ]
        }
      ]
    }
  }
]

export default login
