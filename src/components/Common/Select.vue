<script setup lang="ts">
import {useModel} from "@/hooks";
import {DownOne} from "@icon-park/vue-next"
import {ref, useTemplateRef, type Ref} from 'vue'

const props = defineProps<{
  modelValue: string
  data: Record<string, string>
}>()

const emits = defineEmits(["update:modelValue"])

const {modelValue} = props

const value: Ref<string> = useModel(modelValue, props, "modelValue", emits, "update:modelValue")

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
    <div class="content">
      <div class="value">{{ data[value] }}</div>
      <div class="btn">
        <DownOne theme="filled"/>
      </div>
    </div>
    <ul v-if="state">
      <li @click="value = id" v-for="(item, id) of data" :key="id">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Common/Select.module";
</style>