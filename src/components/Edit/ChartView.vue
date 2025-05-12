<script setup lang="ts">
import {useTemplateRef, onMounted, watch, ref, markRaw} from "vue"
import {debounce} from "@/utils";
import {storeToRefs} from "pinia";
import {chartStore} from "@/stores"
import * as echarts from "echarts"
import type {EChartsType} from "echarts"
import {chartToggleMap} from "@/configs";

const {selectChart, chartData, chartMessage} = storeToRefs(chartStore())

const contentRef = useTemplateRef("content")
const chart = ref<EChartsType | null>(null);

onMounted(() => {
  if (!contentRef.value || !selectChart.value || !chartData.value) return
  chart.value = markRaw(echarts.init(contentRef.value))
  const id = selectChart.value;
  const typeId = chartMessage.value[id].typeId;
  const option = chartData.value[id];
  const result = chartToggleMap[typeId](option)
  console.log(result)
  chart.value.setOption(result, true)
  window.addEventListener('resize', debounce(() => chart.value?.resize(), 300))
})

watch(selectChart, () => chart.value?.resize())

</script>

<template>
  <div class="chart-view">
    <div ref="content" class="content"></div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Edit/ChartView.module";
</style>