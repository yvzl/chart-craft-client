<script setup lang="ts">
import {ref} from "vue";
import Select from "@/components/Common/Select.vue";
import Scroll from "@/components/Common/Scroll.vue";
import CheckBox from "@/components/Common/CheckBox.vue";
import ColorInput from "@/components/Common/ColorInput.vue";
import NumberInput from "@/components/Common/NumberInput.vue";

const {height = 0} = defineProps<{
  height?: number
}>()

const data = ref({
  1: "上下",
  2: "左右"
});

const state = ref(false)

const select = ref("1")

const colorValue = ref("")

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
              <div class="check">
                <CheckBox v-model="state"/>
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="header">坐标系网格</div>
          <div class="level-content">
            <div class="attr">
              <span class="name">下边距：</span>
              <div class="number">
                <NumberInput v-model="value"/>
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="header">图例</div>
          <div class="level-content">
            <div class="attr">
              <span class="name">图例标记高度：</span>
              <div class="enter">
                <Select v-model="select" :data="data"/>
              </div>
            </div>
          </div>
          <div class="box2">
            <div class="header">
              文本样式
            </div>
            <div class="level-content">
              <div class="attr">
                <span class="name">颜色：</span>
                <div class="color">
                  <ColorInput v-model="colorValue"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Edit/AttrSetting.module";
</style>