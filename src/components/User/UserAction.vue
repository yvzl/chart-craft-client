<script setup lang="ts">
import type {IUserAction} from "@/types"

defineProps<{
  data: IUserAction[]
}>()

const emits = defineEmits();
</script>

<template>
  <ul class="user-action">
    <li v-for="{id, name, eventName} in data" :key="id" @click="emits(eventName)">{{ name }}</li>
  </ul>
</template>

<style scoped lang="scss">
@use "@/assets/styles/User/UserAction.module";
</style>