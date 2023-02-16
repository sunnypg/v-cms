import { defineStore } from 'pinia'
import {
  getAmountData,
  getGoodsCategoryCount,
  getGoodsCategorySale,
  getGoodsCategoryFavor,
  getGoodsAddressSale
} from '@/service/main/home/home'

interface IHomeState {
  amountList: any[]
  goodsCategoryCount: any[]
  goodsCategorySale: any[]
  goodsCategoryFavor: any[]
  goodsAddressSale: any[]
}

const useHomeStore = defineStore('home', {
  state: (): IHomeState => ({
    amountList: [],
    goodsCategoryCount: [],
    goodsCategorySale: [],
    goodsCategoryFavor: [],
    goodsAddressSale: []
  }),
  actions: {
    // 获取首页数据
    async getHomeDataAction() {
      getAmountData().then((res) => {
        this.amountList = res.data
      })
      getGoodsCategoryCount().then((res) => {
        this.goodsCategoryCount = res.data
      })
      getGoodsCategorySale().then((res) => {
        this.goodsCategorySale = res.data
      })
      getGoodsCategoryFavor().then((res) => {
        this.goodsCategoryFavor = res.data
      })
      getGoodsAddressSale().then((res) => {
        this.goodsAddressSale = res.data
      })
    }
  }
})

export default useHomeStore
