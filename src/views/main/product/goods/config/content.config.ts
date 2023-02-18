const contentConfig = {
  pageName: 'goods',
  header: {
    title: '商品列表',
    btnTitle: '新增商品'
  },
  propsList: [
    { type: 'selection', label: '选择', width: '50px' },
    { type: 'index', label: '序号', width: '60px' },

    { type: 'normal', label: '商品名称', prop: 'name' },
    { type: 'normal', label: '原价', prop: 'oldPrice', width: '100px' },
    { type: 'normal', label: '售价', prop: 'newPrice', width: '100px' },
    { type: 'normal', label: '商品描述', prop: 'desc' },
    { type: 'custom', label: '状态', prop: 'status', width: '60px', slotName: 'status' },
    { type: 'custom', label: '图片', prop: 'imgUrl', width: '150px', slotName: 'imgUrl' },
    { type: 'normal', label: '库存数量', prop: 'inventoryCount', width: '100px' },
    { type: 'normal', label: '销量', prop: 'saleCount', width: '100px' },
    { type: 'normal', label: '收藏量', prop: 'favorCount', width: '100px' },
    { type: 'normal', label: '地址', prop: 'address', width: '100px' },

    { type: 'handler', label: '操作', width: '150px' }
  ]
}

export default contentConfig
