<script setup lang="ts">
const {classList = []} = defineProps<{
  classList?: string[]
}>()
</script>

<template>
  <div :class="`check-code ${classList.join(' ')}`">
    <img src="#" alt="?"/>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/CheckCode.module";
</style>