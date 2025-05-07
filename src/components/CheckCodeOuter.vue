<script setup lang="ts">
import {useModel} from "@/hooks";
import CheckCode from "@/components/CheckCode.vue";
import AuthenticationInput from "@/components/AuthenticationInput.vue";

const props = defineProps<{
  modelValue: string
  placeholder?: string
}>()

const {modelValue, placeholder = ""} = props

const emits = defineEmits(['update:modelValue']);
const value = useModel(modelValue, props, "modelValue", emits, "update:modelValue")
</script>

<template>
  <div class="check-code-outer">
    <div class="input">
      <AuthenticationInput v-model="value" :placeholder="placeholder"/>
    </div>
    <CheckCode :classList="['code']"/>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/CheckCodeOuter.module";
</style>