<script setup lang="ts">
import Header from "@/components/Header.vue"
import {mapEvent} from "@/utils";
import {chartBtnList, chartBtnEventMap, homeBarList, homeBarEventMap} from "@/configs"
import ChartList from "@/components/ChartList.vue"
import NavBar from "@/components/NavBar.vue"
import Scroll from "@/components/Scroll.vue"
import CreateChart from "@/components/CreateChart.vue"

import {onMounted, ref, useTemplateRef} from "vue"
import {storeToRefs} from "pinia"
import {chartStore} from "@/stores"

const store = chartStore()

const {chartData} = storeToRefs(store)

const height = ref(0);
const mainRef = useTemplateRef("mainRef");

onMounted(() => {
  const h = mainRef.value?.clientHeight;
  h && (height.value = h - 60);
})

const chartListEmits = mapEvent(chartBtnList, chartBtnEventMap)
const NavBarEmits = mapEvent(homeBarList, homeBarEventMap)
</script>

<template>
  <div class="home">
    <Header/>
    <NavBar v-on="NavBarEmits" :barList="homeBarList"/>
    <div ref="mainRef" class="main">
      <Scroll :classList="['scroll_']" :height="height">
        <div class="list">
          <CreateChart/>
          <ChartList v-on="chartListEmits" :btnList="chartBtnList" :data="chartData"/>
        </div>
      </Scroll>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/Home.module";
</style>