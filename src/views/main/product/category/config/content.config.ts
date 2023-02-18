const contentConfig = {
  pageName: 'category',
  header: {
    title: '分类列表',
    btnTitle: '新增分类'
  },
  propsList: [
    { type: 'selection', label: '选择', width: '50px' },
    { type: 'index', label: '序号', width: '60px' },

    { type: 'normal', label: '分类名称', prop: 'name', width: '150px' },

    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },

    { type: 'handler', label: '操作', width: '150px' }
  ]
}

export default contentConfig
