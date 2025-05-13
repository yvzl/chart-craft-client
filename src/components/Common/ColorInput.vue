<script setup lang="ts">
import TextInput from "@/components/Common/TextInput.vue";

const {modelValue} = defineProps<{
  modelValue: string;
}>()

const value = defineModel<typeof modelValue>()
</script>

<template>
  <div class="color-input">
    <TextInput v-model="value">
      <div :style="{backgroundColor: value}" class="color-box"></div>
    </TextInput>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Common/ColorInput.module";
</style>