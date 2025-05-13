<script setup lang="ts">
const {modelValue} = defineProps<{
  modelValue: boolean
}>()

const value = defineModel<typeof modelValue>()
</script>

<template>
  <div class="check-box">
    <label>
      <input v-model="value" type="checkbox"/>
      <span>✔</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Common/CheckBox.module";
</style>