<script setup lang="ts">
const {height = 0} = defineProps<{
  height?: number;
}>()
</script>

<template>
  <div :style="{height: `${height}px`}" class="scroll">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Scroll.module";
</style>