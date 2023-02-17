<template>
  <div class="base-echart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watchEffect } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import ChinaJson from '../data/china.json'

echarts.registerMap('china', ChinaJson as any)

interface IProps {
  option: EChartsOption
}

const props = defineProps<IProps>()

const echartRef = ref<HTMLElement>()

onMounted(() => {
  // 初始化 echarts 实例
  const echartInstance = echarts.init(echartRef.value!, 'light', { renderer: 'canvas' })

  // 设置option
  // watchEffect 监听option变化，重新执行
  watchEffect(() => {
    echartInstance.setOption(props.option)
  })

  // 宽度自适应
  window.onresize = () => {
    echartInstance.resize()
  }
})

// 销毁事件
onBeforeUnmount(() => {
  window.onresize = null
})
</script>

<style lang="less" scoped>
.echart {
  height: 300px;
}
</style>
