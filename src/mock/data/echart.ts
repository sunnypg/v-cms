const echart: any[] = [
  {
    url: new RegExp('/goods/category/count'),
    method: 'get',
    tpl: {
      code: 200,
      msg: 'success',
      data: [
        {
          name: '男装',
          goodsCount: 3333
        },
        {
          name: '女装',
          goodsCount: 6666
        },
        {
          name: '春装',
          goodsCount: 5555
        },
        {
          name: '夏装',
          goodsCount: 2222
        },
        {
          name: '秋装',
          goodsCount: 4444
        },
        {
          name: '冬装',
          goodsCount: 1111
        }
      ]
    }
  },
  {
    url: new RegExp('/goods/category/sale'),
    method: 'get',
    tpl: {
      code: 200,
      msg: 'success',
      data: [
        {
          name: '男装',
          goodsCount: 3333
        },
        {
          name: '女装',
          goodsCount: 6666
        },
        {
          name: '春装',
          goodsCount: 5555
        },
        {
          name: '夏装',
          goodsCount: 2222
        },
        {
          name: '秋装',
          goodsCount: 4444
        },
        {
          name: '冬装',
          goodsCount: 1111
        }
      ]
    }
  },
  {
    url: new RegExp('/goods/category/favor'),
    method: 'get',
    tpl: {
      code: 200,
      msg: 'success',
      data: [
        {
          name: '男装',
          goodsFavor: 3333
        },
        {
          name: '女装',
          goodsFavor: 6666
        },
        {
          name: '春装',
          goodsFavor: 5555
        },
        {
          name: '夏装',
          goodsFavor: 2222
        },
        {
          name: '秋装',
          goodsFavor: 4444
        },
        {
          name: '冬装',
          goodsFavor: 1111
        }
      ]
    }
  },
  {
    url: new RegExp('/goods/sale/top10'),
    method: 'get',
    tpl: {
      code: 200,
      msg: 'success',
      data: {}
    }
  },
  {
    url: new RegExp('/goods/address/sale'),
    method: 'get',
    tpl: {
      code: 200,
      msg: 'success',
      data: [
        {
          address: '北京',
          count: 88888
        },
        {
          address: '上海',
          count: 56666
        },
        {
          address: '广州',
          count: 99999
        },
        {
          address: '深圳',
          count: 555
        },
        {
          address: '杭州',
          count: 888
        },
        {
          address: '成都',
          count: 16666
        },
        {
          address: '武汉',
          count: 39999
        },
        {
          address: '南京',
          count: 25555
        },
        {
          address: '青岛',
          count: 999
        },
        {
          address: '郑州',
          count: 55555
        }
      ]
    }
  },
  {
    url: new RegExp('/goods/amount/list'),
    method: 'get',
    tpl: {
      code: 200,
      msg: 'success',
      data: {}
    }
  }
]

export default echart
