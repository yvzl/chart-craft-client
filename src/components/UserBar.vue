<script setup lang="ts">
import {useModel} from "@/hooks";
import type {IUserBar} from "@/types";

const props = defineProps<{
  data: IUserBar[],
  modelValue: IUserBar["id"]
}>()

const {modelValue} = props
const emits = defineEmits(["update:modelValue"]);

const value = useModel(modelValue, props, "modelValue", emits, "update:modelValue")
</script>

<template>
  <ul class="user-bar">
    <li @click="value = id" :class="{active: value === id}" v-for="{id, title} in data" :key="id">{{ title }}</li>
  </ul>
</template>

<style scoped lang="scss">
@use "@/assets/styles/UserBar.module";
</style>