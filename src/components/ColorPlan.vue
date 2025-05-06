<script setup lang="ts">
import {ref} from "vue";
import {colorList} from "@/configs"
import Scroll from "@/components/Scroll.vue";

const state = ref("1")

const {height = 0} = defineProps<{
  height?: number
}>()
</script>

<template>
  <div class="color-plan">
    <Scroll :height="height">
      <div class="color-plan-main">
        <div class="box">
          <div class="header">系统主题：</div>
          <div class="content">
            <ul class="outer-color">
              <li :class="{active: state === id}" @click="state = id" v-for="{id, bgColor, itemColor} in colorList" :style="{backgroundColor: bgColor}" :key="id">
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
@use "@/assets/styles/ColorPlan.module";
</style>