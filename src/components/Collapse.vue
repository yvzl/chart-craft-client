<script setup lang="ts">
import {useModel} from "@/hooks";
import {Right, Down} from "@icon-park/vue-next"
import type {ICollapseItem} from "@/types";
import {nextTick, onMounted, ref, useTemplateRef} from "vue";

const props = defineProps<{
  modelValue: ICollapseItem["id"],
  data: ICollapseItem[]
}>()

const {modelValue} = props
const emits = defineEmits(['update:modelValue']);

const height = ref(0)
const ulRef = useTemplateRef("ulRef");
const headerRef = useTemplateRef<HTMLElement[]>("headerRef");

const computedH = () => {
  const ulH = ulRef.value?.clientHeight;
  const headerList = headerRef.value
  if(!headerList?.length || !ulH) return
  height.value = ulH - headerList[0].clientHeight * headerList.length
}

onMounted(computedH)

window.addEventListener("resize", () => {
  height.value = 0
  nextTick(computedH)
})

const state = useModel(modelValue, props, "modelValue", emits, "update:modelValue");
</script>

<template>
  <ul ref="ulRef" class="collapse">
    <li v-for="{id, title, content} in data" :key="id">
      <div ref="headerRef" @click="state = id" class="header">
        <p>{{ title }}</p>
        <div class="icon">
          <Down v-if="id === state"/>
          <Right v-else/>
        </div>
      </div>
      <div class="main">
        <transition>
          <div v-if="id === state" class="transition" :style="{maxHeight: `${height}px`}">
            <component :height="height" :is="content"/>
          </div>
        </transition>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Collapse.module";
</style>