<script setup lang="ts">
import Submit from "@/components/Submit.vue";
</script>

<template>
  <div class="check-email-code">
    <Submit :classList="['code-btn']" value="获取验证码"/>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/CheckEmailCode.module";
</style>