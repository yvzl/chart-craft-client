<script setup lang="ts">
import {ref} from "vue";
import {chartTypeList} from "@/configs"
import Scroll from "@/components/Common/Scroll.vue";

const state = ref("1")

const {height = 0} = defineProps<{
  height?: number
}>()
</script>

<template>
  <div class="chart-select">
    <Scroll :height="height">
      <div class="chart-select-main">
        <div class="box">
          <div class="other-content">
            <ul>
              <li @click="state = id" :class="{active: state === id}" v-for="{id, name, cover} in chartTypeList" :key="id">
                <img :src="cover" alt="?"/>
                <p>{{ name }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Edit/ChartSelect.module";
</style>