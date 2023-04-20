const system: any[] = [
  {
    url: new RegExp('/users/list'),
    method: 'post',
    tpl: {
      code: 200,
      msg: 'success',
      data: {
        totalCount: 1,
        list: [
          {
            name: 'coderwhy',
            realname: 'coderwhy',
            cellphone: '15890561784',
            enable: 1,
            createAt: '2023-04-18 15:55',
            updateAt: '2023-04-18 15:55'
          }
        ]
      }
    }
  },
  {
    url: new RegExp('/department/list'),
    method: 'post',
    tpl: {
      code: 200,
      msg: 'success',
      data: {
        totalCount: 1,
        list: [
          {
            name: '总裁办',
            leader: 'coderwhy',
            parentId: 1,
            createAt: '2023-04-18 15:55',
            updateAt: '2023-04-18 15:55'
          }
        ]
      }
    }
  },
  {
    url: new RegExp('/menu/list'),
    method: 'post',
    tpl: {
      code: 200,
      msg: 'success',
      data: {
        totalCount: 1,
        list: [
          {
            name: '系统管理',
            type: 1,
            url: '/main/system',
            icon: 'el-icon-setting',
            sort: 1,
            permission: '',
            createAt: '2023-04-18 15:55',
            updateAt: '2023-04-18 15:55'
          }
        ]
      }
    }
  },
  {
    url: new RegExp('/role/list'),
    method: 'post',
    tpl: {
      code: 200,
      msg: 'success',
      data: {
        totalCount: 1,
        list: [
          {
            name: '超级管理员',
            intro: '所有权限',
            createAt: '2023-04-18 15:55',
            updateAt: '2023-04-18 15:55'
          }
        ]
      }
    }
  }
]

export default system
