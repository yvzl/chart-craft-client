<script setup lang="ts">
import {useModel} from "@/hooks";
import TextInput from "@/components/TextInput.vue";

const props = defineProps<{
  modelValue: string;
}>()

const {modelValue} = props

const emits = defineEmits(["update:modelValue"]);

const value = useModel(modelValue, props, "modelValue", emits, "update:modelValue");
</script>

<template>
  <div class="color-input">
    <TextInput v-model="value">
      <div :style="{backgroundColor: value}" class="color-box"></div>
    </TextInput>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/ColorInput.module";
</style>