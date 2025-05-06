<script setup lang="ts">
import {ref} from "vue";
import Select from "@/components/Select.vue";
import Scroll from "@/components/Scroll.vue";
import CheckBox from "@/components/CheckBox.vue";
import ColorInput from "@/components/ColorInput.vue";
import NumberInput from "@/components/NumberInput.vue";

const data = ref({
  1: "上下",
  2: "左右"
});

const state = ref(false)

const select = ref("1")

const colorValue = ref("")

const {height = 0} = defineProps<{
  height?: number
}>()

const value = ref(1)
</script>

<template>
  <div class="attr-setting">
    <Scroll :height="height">
      <div class="attr-setting-main">
        <div class="box">
          <div class="header">值域漫游器</div>
          <div class="level-content">
            <div class="attr">
              <span class="name">显示控件(X轴)：</span>
              <CheckBox v-model="state"/>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="header">坐标系网格</div>
          <div class="level-content">
            <div class="attr">
              <span class="name">下边距：</span>
              <NumberInput v-model="value"/>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="header">图例</div>
          <div class="level-content">
            <div class="attr">
              <span class="name">图例标记高度：</span>
              <Select v-model="select" :data="data"/>
            </div>
          </div>
          <div class="box2">
            <div class="header">
              文本样式
            </div>
            <div class="level-content">
              <div class="attr">
                <span class="name">颜色：</span>
                <ColorInput v-model="colorValue"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/AttrSetting.module";
</style>