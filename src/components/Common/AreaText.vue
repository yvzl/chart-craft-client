<script setup lang="ts">
const {modelValue, rows = 5} = defineProps<{
  modelValue: string,
  rows?: number
}>()

const value = defineModel<typeof modelValue>()
</script>

<template>
  <div class="area-text">
    <template v-if="value !== void 0">
      <textarea v-model="value" :rows="rows"/>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Common/AreaText.module";
</style>