<script setup lang="ts">
import {Right, Down} from "@icon-park/vue-next"
import type {ICollapseItem} from "@/types";
import {nextTick, onMounted, ref, useTemplateRef} from "vue";

const {modelValue} = defineProps<{
  modelValue: ICollapseItem["id"],
  data: ICollapseItem[]
}>()

const height = ref(0)
const collapseRef = useTemplateRef("collapseRef");
const headerRef = useTemplateRef<HTMLElement[]>("headerRef");

const computedH = () => {
  const ulH = collapseRef.value?.clientHeight;
  const headerList = headerRef.value
  if (!headerList?.length || !ulH) return
  height.value = ulH - headerList[0].clientHeight * headerList.length
}

onMounted(computedH)

window.addEventListener("resize", () => {
  height.value = 0
  nextTick(computedH)
})

const state = defineModel<typeof modelValue>()
</script>

<template>
  <div ref="collapseRef" class="collapse">
    <ul v-if="state !== void 0">
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
            <template v-if="id === state">
              <div class="transition" :style="{maxHeight: `${height}px`}">
                <Component :height="height" :is="content"/>
              </div>
            </template>
          </transition>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Edit/Collapse.module";
</style>