<script setup lang="ts">
import Submit from "@/components/Common/Submit.vue";
</script>

<template>
  <div class="check-email-code">
    <div class="btn">
      <Submit type="primary" :classList="['code-btn']" value="获取验证码"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Authentication/CheckEmailCode.module";
</style>