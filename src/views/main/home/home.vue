<template>
  <div class="home">
    <!-- 顶部 -->
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6">
          <count-card v-bind="item" />
        </el-col>
      </template>
    </el-row>
    <!-- 中间图表 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <chart-card>
          <!-- 饼图 -->
          <pie-echart :pie-data="showGoodsCategoryCount" />
        </chart-card>
      </el-col>
      <el-col :span="10">
        <chart-card>
          <!-- 地图 -->
          <map-echart :map-data="showGoodsAddressSale" />
        </chart-card>
      </el-col>
      <el-col :span="7">
        <chart-card>
          <!-- 玫瑰图 -->
          <rose-echart :rose-data="showGoodsCategoryCount" />
        </chart-card>
      </el-col>
    </el-row>
    <!-- 底部图表 -->
    <el-row :gutter="10">
      <el-col :span="12">
        <chart-card>
          <!-- 折线图 -->
          <line-echart v-bind="showGoodsCategorySale" />
        </chart-card>
      </el-col>
      <el-col :span="12">
        <chart-card>
          <!-- 柱状图 -->
          <bar-echart v-bind="showGoodsCategoryFavor" />
        </chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import countCard from './cpns/count-card.vue'
import useHomeStore from '@/store/main/home/home'
import { storeToRefs } from 'pinia'
import chartCard from './cpns/chart-card.vue'
import { PieEchart, LineEchart, RoseEchart, BarEchart, MapEchart } from '@/components/page-echarts'

// 发起获取首页数据的请求
const homeStore = new (useHomeStore as any)()
homeStore.getHomeDataAction()

// 从 store 中拿到数据
const { amountList, goodsCategoryCount, goodsCategorySale, goodsCategoryFavor, goodsAddressSale } =
  storeToRefs(homeStore)

// 格式化数据
const showGoodsCategoryCount = computed(() => {
  return goodsCategoryCount.value.map((item: any) => ({
    name: item.name,
    value: item.goodsCount
  }))
})
const showGoodsCategorySale = computed(() => {
  const labels = goodsCategorySale.value.map((item: any) => item.name)
  const values = goodsCategorySale.value.map((item: any) => item.goodsCount)
  return { labels, values }
})
const showGoodsCategoryFavor = computed(() => {
  const labels = goodsCategoryFavor.value.map((item: any) => item.name)
  const values = goodsCategoryFavor.value.map((item: any) => item.goodsFavor)
  return { labels, values }
})
const showGoodsAddressSale = computed(() => {
  return goodsAddressSale.value.map((item: any) => ({
    name: item.address,
    value: item.count
  }))
})
</script>
<style scoped lang="less">
.el-row {
  margin-bottom: 10px;
}
</style>
