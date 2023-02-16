<template>
  <div class="pie-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseEchart from '..'
import type { EChartsOption } from 'echarts'
import type { IPieEchartData } from '../types'

interface IProps {
  pieData: IPieEchartData[]
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
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        // 设置区域的位置
        center: ['50%', '40%'],
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
