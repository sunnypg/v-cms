<template>
  <div class="rose-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseEchart from '..'
import type { EChartsOption } from 'echarts'
import type { IPieEchartData } from '../types'

interface IProps {
  roseData: IPieEchartData[]
}

const props = defineProps<IProps>()

const option = computed<EChartsOption>(() => {
  return {
    legend: {
      top: 'bottom'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        // 内半径、外半径的大小
        radius: [20, 100],
        // 设置区域的位置
        center: ['50%', '40%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData,
        labelLine: {
          length: 10, //第一条线
          length2: 5 //第二条线
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
