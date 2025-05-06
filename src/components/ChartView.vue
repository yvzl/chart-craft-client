<script setup lang="ts">
const {classList = []} = defineProps<{
  classList?: Array<string>;
}>()
</script>

<template>
  <div :class="`chart-view ${classList.join(' ')}`">
    <div class="content">

    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/ChartView.module";
</style>