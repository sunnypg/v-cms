const product: any[] = [
  {
    url: new RegExp('/category/list'),
    method: 'post',
    tpl: {
      code: 200,
      msg: 'success',
      data: {
        totalCount: 2,
        list: [
          {
            name: '女装',
            createAt: '2023-04-18 15:55',
            updateAt: '2023-04-18 15:55'
          },
          {
            name: '男装',
            createAt: '2023-04-18 15:55',
            updateAt: '2023-04-18 15:55'
          }
        ]
      }
    }
  },
  {
    url: new RegExp('/goods/list'),
    method: 'post',
    tpl: {
      code: 200,
      msg: 'success',
      data: {
        totalCount: 1,
        list: [
          {
            name: '短裤',
            oldPrice: 888,
            newPrice: 88,
            desc: '夏季，潮牌',
            status: 1,
            imgUrl:
              'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextrahttps://img.alicdn.com/imgextra/i2/3547280601/O1CN01FM1E5B1GJIrcPlUTO_!!3547280601-0-alimamacc.jpg_250x250.jpg_.webp',
            inventoryCount: 999,
            saleCount: 888,
            favorCount: 666,
            address: '广东省广州市',
            createAt: '2023-04-18 15:55',
            updateAt: '2023-04-18 15:55'
          }
        ]
      }
    }
  }
]

export default product
