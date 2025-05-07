<script setup lang="ts">
import defaultHead from "@/assets/images/default.jpg"

const {src = defaultHead} = defineProps<{
  src?: string
}>()
</script>

<template>
  <div class="avatar">
    <img :src="src" alt="?"/>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Common/Avatar.module";
</style>