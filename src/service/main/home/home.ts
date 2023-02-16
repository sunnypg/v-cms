import myRequest from '@/service'

// 获取首页顶部数据
export function getAmountData() {
  return myRequest.get({
    url: `/goods/amount/list`
  })
}

// 获取商品数量
export function getGoodsCategoryCount() {
  return myRequest.get({
    url: `/goods/category/count`
  })
}

// 获取商品销量
export function getGoodsCategorySale() {
  return myRequest.get({
    url: `/goods/category/sale`
  })
}

// 获取商品收藏
export function getGoodsCategoryFavor() {
  return myRequest.get({
    url: `/goods/category/favor`
  })
}

// 获取地图数据
export function getGoodsAddressSale() {
  return myRequest.get({
    url: `/goods/address/sale`
  })
}
