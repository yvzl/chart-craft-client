<script setup lang="ts">
import {storeToRefs} from "pinia"
import {chartStore} from "@/stores"
import {chartTypeMap} from "@/configs"
import Scroll from "@/components/Common/Scroll.vue";
import AttrBox from "@/components/Edit/AttrBox.vue";

const store = chartStore()

const {selectChart, chartData} = storeToRefs(store)

const {height = 0} = defineProps<{
  height?: number
}>()
</script>

<template>
  <div class="attr-setting">
    <Scroll :height="height">
      <div class="attr-setting-main">
        <AttrBox v-if="selectChart" v-model="chartData[selectChart].option" :option="chartTypeMap[selectChart]"/>
      </div>
    </Scroll>
  </div>
</template>