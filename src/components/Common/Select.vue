<script setup lang="ts">
import {DownOne} from "@icon-park/vue-next"
import {ref, useTemplateRef} from 'vue'

const {modelValue} = defineProps<{
  modelValue: string
  data: Record<string, string>
}>()

const value = defineModel<typeof modelValue>()

const state = ref(false)
const selectRef = useTemplateRef("selectRef")

window.addEventListener('click', (e: MouseEvent) => {
  const target = e.target
  if (!selectRef.value || !(target instanceof Node) || selectRef.value.contains(target)) return
  state.value = false
})
</script>

<template>
  <div ref="selectRef" class="select" @click="state = !state">
    <template v-if="value !== void 0">
      <div class="content">
        <div class="value">{{ data[value] }}</div>
        <div class="btn">
          <div class="icon">
            <DownOne theme="filled"/>
          </div>
        </div>
      </div>
      <ul v-if="state">
        <li @click="value = id" v-for="(item, id) of data" :key="id">{{ item }}</li>
      </ul>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Common/Select.module";
</style>