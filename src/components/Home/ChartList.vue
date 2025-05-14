<script setup lang="ts">
import {EntityMap, IChart, IChartBtn} from "@/types"

const {btnList} = defineProps<{
  data: EntityMap<IChart>,
  btnList: IChartBtn[],
}>()

const emits = defineEmits();
</script>

<template>
  <ul class="chart-list">
    <li v-for="{id, name, date, cover} in data" class="chart" :key="id">
      <div class="panel">
        <div class="cover-outer">
          <div class="img-box">
            <img :src="cover" alt="?"/>
          </div>
        </div>
        <ul class="mask">
          <li v-for="({id: key, name, icon, eventName}) in btnList" :key="key" @click="emits(eventName, id)">
            <div class="icon-outer">
              <Component :is="icon"/>
            </div>
            <p>{{ name }}</p>
          </li>
        </ul>
      </div>
      <div class="info">
        <p class="name">{{ name }}</p>
        <p class="date">{{ date }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Home/ChartList.module";
</style>