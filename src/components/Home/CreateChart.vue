<script setup lang="ts">
import {useRouter} from "vue-router";
import chartInstanceWhite from "@/assets/images/chartInstance_white.png"

const router = useRouter();
</script>

<template>
  <div @click="router.push({name: 'Create'})" class="create-chart">
    <img :src="chartInstanceWhite" alt="?"/>
    <p>新建图表</p>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Home/CreateChart.module";
</style>