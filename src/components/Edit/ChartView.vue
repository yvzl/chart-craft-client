<script setup lang="ts">
import {useTemplateRef, onMounted, watch, markRaw} from "vue"
import {debounce} from "@/utils";
import {storeToRefs} from "pinia";
import {chartStore} from "@/stores"
import * as echarts from "echarts"

const store = chartStore()
const {selectChart, toggleChart, chartBox} = storeToRefs(store)
const contentRef = useTemplateRef("content")

onMounted(() => {
  if (!contentRef.value || !selectChart.value) return
  chartBox.value = markRaw(echarts.init(contentRef.value))
  chartBox.value.setOption(toggleChart.value, true)
  window.addEventListener('resize', debounce(() => chartBox.value?.resize(), 300))
})

watch(selectChart, () => chartBox.value?.resize())
</script>

<template>
  <div class="chart-view">
    <div ref="content" class="content"></div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Edit/ChartView.module";
</style>