<script setup lang="ts">
import {useModel} from "@/hooks";
import CheckEmailCode from "@/components/CheckEmailCode.vue";
import AuthenticationInput from "@/components/AuthenticationInput.vue";

const props = defineProps<{
  modelValue: string
  classList?: string[]
  cd?: number
}>()

const {modelValue, classList = []} = props

const emits = defineEmits(['update:modelValue']);
const value = useModel(modelValue, props, "modelValue", emits, "update:modelValue")
</script>

<template>
  <div :class="`check-code-outer ${classList.join(' ')}`">
    <AuthenticationInput :classList="['code-input']" v-model="value" placeholder="请输入验证码"/>
    <CheckEmailCode/>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/CheckEmailCodeOuter.module";
</style>