<script setup lang="ts">
import {useModel} from "@/hooks";

const props = defineProps<{
  modelValue: string,
  rows?: number
}>()

const {modelValue, rows = 5} = props

const emits = defineEmits(['update:modelValue'])

const value = useModel(modelValue, props, "modelValue", emits, "modelValue")
</script>

<template>
  <div class="area-text">
    <textarea v-model="value" :rows="rows"/>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/AreaText.module";
</style>