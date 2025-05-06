<script setup lang="ts">
import {useModel} from "@/hooks";

const props = defineProps<{
  modelValue: string,
  placeholder?: string,
  classList?: string[]
}>()

const {modelValue, placeholder = "", classList = []} = props
const emits = defineEmits(["update:modelValue"])
const value = useModel(modelValue, props, "modelValue", emits, "update:modelValue")
</script>

<template>
  <div :class="`authentication-input ${classList.join(' ')}`">
    <input autocomplete="new-password" type="text" :placeholder="placeholder" v-model="value"/>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/AuthenticationInput.module";
</style>