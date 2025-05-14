<script setup lang="ts">
const {modelValue} = defineProps<{
  modelValue: string
}>()

const value = defineModel<typeof modelValue>()
</script>

<template>
  <div class="text-input">
    <template v-if="value !== void 0">
      <input type="text" v-model="value"/>
      <slot></slot>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Common/TextInput.module";
</style>