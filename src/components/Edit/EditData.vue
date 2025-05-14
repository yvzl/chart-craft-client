<script setup lang="ts">
import {ref, watch} from 'vue'
import {chartStore} from "@/stores";
import {storeToRefs} from "pinia";
import Scroll from "@/components/Common/Scroll.vue";
import Submit from "@/components/Common/Submit.vue";
import {chartDataToggle, chartMaxDimension} from "@/configs";

const {height = 0} = defineProps<{
  height?: number
}>()

const store = chartStore()

const {selectChart, chartData, chartMessage, chartBox, toggleChart} = storeToRefs(store)

const seriesData = ref<number[][]>([[]])
const xData = ref<string[]>([])
const yData = ref<string[]>([])
const maxRows = ref(0)
const maxCols = ref(0)

const state = ref(false)

const initData = () => {
  if (!selectChart.value) return
  const {seriesData: a, xData: b, yData: c} = chartData.value[selectChart.value]
  const typeId = chartMessage.value[selectChart.value].typeId
  const {maxRows: r, maxCols: l} = chartMaxDimension[typeId]
  seriesData.value = chartDataToggle[typeId](a)
  xData.value = b
  yData.value = c
  maxRows.value = r
  maxCols.value = l
}

initData()

watch([seriesData, xData, yData], () => state.value = true, {deep: true})

// watch()

const updateData = () => {
  if (!state.value) return
  chartBox.value?.setOption(toggleChart.value, true)
  state.value = false
}
</script>

<template>
  <div class="edit-data">
    <Scroll :height="height">
      <div class="edit-data-main">
        <div class="box">
          <div class="other-content">
            <div class="table-outer">
              <table>
                <tr v-for="(_, i) in maxRows" :key="i">
                  <template v-if="i === 0">
                    <th class="col"></th>
                    <th class="col" v-for="(_, j) in maxCols">
                      <input v-model="xData[j]"/>
                    </th>
                  </template>
                  <template v-else>
                    <th :style="{borderTop: i === 1 ? 'none' : '1px solid #ccc'}" class="row">
                      <input v-model="yData[i - 1]"/>
                    </th>
                    <td :style="{borderTop: i === 1 ? 'none' : '1px solid #ccc'}" v-for="(_, j) in maxCols">
                      <input type="number" v-model="seriesData[i - 1][j]"/>
                    </td>
                  </template>
                </tr>
              </table>
            </div>
            <div class="btn-list">
              <div class="btn">
                <Submit value="导出数据"/>
              </div>
              <div class="btn">
                <Submit type="primary" value="导入数据"/>
              </div>
              <div v-if="chartBox !== null" class="btn">
                <Submit @click="updateData" value="确认"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Edit/EditData.module";
</style>