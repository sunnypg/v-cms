const searchConfig = {
  pageName: 'goods',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      type: 'input',
      prop: 'oldPrice',
      label: '旧价格',
      placeholder: '请输入旧价格'
    },
    {
      type: 'input',
      prop: 'newPrice',
      label: '新价格',
      placeholder: '请输入新价格'
    },
    {
      type: 'input',
      prop: 'desc',
      label: '商品描述',
      placeholder: '请输入商品描述'
    },
    {
      type: 'select',
      prop: 'status',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        {
          label: '已上架',
          value: 1
        },
        {
          label: '未上架',
          value: 0
        }
      ]
    },
    {
      type: 'input',
      prop: 'address',
      label: '地址',
      placeholder: '请输入地址'
    }
  ]
}

export default searchConfig
