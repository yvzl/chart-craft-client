<script setup lang="ts">
const {classList = [], value = "", type = "default"} = defineProps<{
  classList?: string[]
  value?: string
  type?: "default" | "primary"
}>()
</script>

<template>
  <div :class="`authentication-button ${type} ${classList.join(' ')}`">
    <span>{{ value }}</span>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Submit.module";
</style>