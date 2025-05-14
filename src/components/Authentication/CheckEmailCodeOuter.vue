<script setup lang="ts">
import CheckEmailCode from "@/components/Authentication/CheckEmailCode.vue";
import AuthenticationInput from "@/components/Authentication/AuthenticationInput.vue";

const {modelValue} = defineProps<{
  modelValue: string
  cd?: number
}>()

const value = defineModel<typeof modelValue>()
</script>

<template>
  <div class="check-code-outer">
    <template v-if="value !== void 0">
      <div class="input">
        <AuthenticationInput v-model="value" placeholder="请输入验证码"/>
      </div>
      <CheckEmailCode/>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Authentication/CheckEmailCodeOuter.module";
</style>