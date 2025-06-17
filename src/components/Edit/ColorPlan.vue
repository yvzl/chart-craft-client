<script setup lang="ts">
import {colorList} from "@/configs"
import type {IColor} from "@/types"
import Scroll from "@/components/Common/Scroll.vue";
import {chartStore} from "@/stores";
import {storeToRefs} from "pinia";

const store = chartStore()

const {selectChart, chartData, chartBox, toggleChart, selectColor} = storeToRefs(store)

const {height = 0} = defineProps<{
  height?: number
}>()

const toggleColor = (id: IColor["id"]) => {
  if(selectColor.value === id || !selectChart.value) return
  selectColor.value = id
  const value = chartData.value[selectChart.value]
  value.bgColor = colorList[id].bgColor
  value.colorData = colorList[id].itemColor.map(({value}) => value)
  chartBox.value?.setOption(toggleChart.value, true)
}
</script>

<template>
  <div class="color-plan">
    <Scroll :height="height">
      <div class="color-plan-main">
        <div class="box">
          <div class="header">系统主题：</div>
          <div class="content">
            <ul class="outer-color">
              <li v-for="{id, bgColor, itemColor} in colorList" :class="{active: selectColor === id}" @click="toggleColor(id)" :style="{backgroundColor: bgColor}" :key="id">
                <ul class="inner-color">
                  <li v-for="{id: _id, value} in itemColor" :style="{backgroundColor: value}" :key="_id"></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="box">
          <div class="header">自定义主题：</div>
          <div class="content">
              <div class="create-color">
                <span>新建主题</span>
              </div>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Edit/ColorPlan.module";
</style>