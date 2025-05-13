<script setup lang="ts">
const {modelValue, rows = 5} = defineProps<{
  modelValue: string,
  rows?: number
}>()

const value = defineModel<typeof modelValue>()
</script>

<template>
  <div class="area-text">
    <textarea v-model="value" :rows="rows"/>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Common/AreaText.module";
</style>