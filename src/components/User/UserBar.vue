<script setup lang="ts">
import type {IUserBar} from "@/types";

const {modelValue} = defineProps<{
  data: IUserBar[],
  modelValue: IUserBar["id"]
}>()

const value = defineModel<typeof modelValue>()
</script>

<template>
  <div class="user-bar">
    <ul v-if="value">
      <li v-for="{id, title} in data" :key="id" @click="value = id" :class="{active: value === id}">{{ title }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/User/UserBar.module";
</style>