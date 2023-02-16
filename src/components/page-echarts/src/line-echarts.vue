<template>
  <div class="line-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseEchart from '..'
import type { EChartsOption } from 'echarts'

interface IProps {
  labels: string[]
  values: string[]
}

const props = defineProps<IProps>()

const option = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.labels
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '分类销量统计',
        type: 'line',
        stack: '总量',
        data: props.values
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
