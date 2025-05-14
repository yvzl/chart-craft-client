<script setup lang="ts">
import {watch, computed} from "vue";
import {storeToRefs} from "pinia"
import {chartStore} from "@/stores"
import {chartTypeMap} from "@/configs"
import Scroll from "@/components/Common/Scroll.vue";
import AttrBox from "@/components/Edit/AttrBox.vue";
import type {EChartsOption} from "echarts"

const {height = 0} = defineProps<{
  height?: number
}>()
const store = chartStore()

const {selectChart, chartData, chartBox, toggleChart} = storeToRefs(store)

const currentOption = computed<EChartsOption>(() => {
  if (!selectChart.value || !chartData.value[selectChart.value]) return {}
  return chartData.value[selectChart.value].option
})

watch(currentOption, () => {
  chartBox.value?.setOption(toggleChart.value, true)
}, {deep: true})
</script>

<template>
  <div class="attr-setting">
    <Scroll :height="height">
      <div class="attr-setting-main">
        <template v-if="selectChart !== null">
          <AttrBox v-model="currentOption" :option="chartTypeMap[selectChart]"/>
        </template>
      </div>
    </Scroll>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Edit/AttrSetting.module";
</style>