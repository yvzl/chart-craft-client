<script setup lang="ts">
import Header from "@/components/Common/Header.vue"
import {mapEvent} from "@/utils";
import {chartBtnList, chartBtnEventMap, homeBarList, homeBarEventMap} from "@/configs"
import ChartList from "@/components/Home/ChartList.vue"
import NavBar from "@/components/Common/NavBar.vue"
import Scroll from "@/components/Common/Scroll.vue"
import CreateChart from "@/components/Home/CreateChart.vue"

import {onMounted, ref, useTemplateRef} from "vue"
import {storeToRefs} from "pinia"
import {chartStore} from "@/stores"

const store = chartStore()

const {chartMessage} = storeToRefs(store)

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
      <div class="scroll_">
        <Scroll :height="height">
          <div class="list">
            <CreateChart/>
            <ChartList v-on="chartListEmits" :btnList="chartBtnList" :data="chartMessage"/>
          </div>
        </Scroll>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/Home/Home.module";
</style>