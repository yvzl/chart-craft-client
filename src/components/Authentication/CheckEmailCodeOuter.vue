<script setup lang="ts">
import {useModel} from "@/hooks";
import CheckEmailCode from "@/components/Authentication/CheckEmailCode.vue";
import AuthenticationInput from "@/components/Authentication/AuthenticationInput.vue";

const props = defineProps<{
  modelValue: string
  cd?: number
}>()

const {modelValue} = props

const emits = defineEmits(['update:modelValue']);
const value = useModel(modelValue, props, "modelValue", emits, "update:modelValue")
</script>

<template>
  <div class="check-code-outer">
    <div class="input">
      <AuthenticationInput v-model="value" placeholder="请输入验证码"/>
    </div>
    <CheckEmailCode/>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Authentication/CheckEmailCodeOuter.module";
</style>