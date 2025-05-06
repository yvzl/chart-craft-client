<script setup lang="ts">
const {height = 0, classList = []} = defineProps<{
  height?: number;
  classList?: string[]
}>()
</script>

<template>
  <div :style="{height: `${height}px`}" :class="`scroll ${classList.join(' ')}`">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Scroll.module";
</style>