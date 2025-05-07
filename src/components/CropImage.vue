<script setup lang="ts">
defineProps<{
  image: File | null
}>()
</script>

<template>
  <div class="crop-image">
    <img v-if="image" src="#" alt="?">
    <div v-else class="empty"></div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/CropImage.module";
</style>