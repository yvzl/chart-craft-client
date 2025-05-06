<script setup lang="ts">
import defaultHead from "@/assets/images/default.jpg"

const {src = defaultHead, classList = []} = defineProps<{
  src?: string
  classList?: string[]
}>()
</script>

<template>
  <div :class="`avatar ${classList.join(' ')}`">
    <img :src="src" alt="?"/>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Avatar.module";
</style>