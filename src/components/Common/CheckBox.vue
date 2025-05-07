<script setup lang="ts">
import {useModel} from "@/hooks";

const props = defineProps<{
  modelValue: boolean
}>()

const {modelValue} = props

const emits = defineEmits(["update:modelValue"]);

const value = useModel(modelValue, props, "modelValue", emits, "update:modelValue");
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