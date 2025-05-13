<script setup lang="ts">
import CheckCode from "@/components/Authentication/CheckCode.vue";
import AuthenticationInput from "@/components/Authentication/AuthenticationInput.vue";

const {placeholder = "", modelValue} = defineProps<{
  modelValue: string
  placeholder?: string
}>()

const value = defineModel<typeof modelValue>()
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
@use "@/assets/styles/Authentication/CheckCodeOuter.module";
</style>