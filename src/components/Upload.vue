<script setup lang="ts">
import {Upload} from "@icon-park/vue-next"

defineProps<{
  modelValue: File | null,
  tips?: string
}>()
</script>

<template>
  <div class="upload">
    <div class="tips">
      <p>{{ tips }}</p>
    </div>
    <div class="btn">
      <Upload theme="filled"/>
      <span>选择文件</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Upload.module";
</style>