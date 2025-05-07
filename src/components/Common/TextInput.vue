<script setup lang="ts">
import {useModel} from "@/hooks";

const props = defineProps<{
  modelValue: string
}>()

const {modelValue} = props

const emits = defineEmits(['update:modelValue'])

const value = useModel(modelValue, props, "modelValue", emits, "update:modelValue")
</script>

<template>
  <div class="text-input">
    <input type="text" v-model="value" />
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Common/TextInput.module";
</style>