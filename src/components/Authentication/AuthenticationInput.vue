<script setup lang="ts">
const {placeholder = "", modelValue} = defineProps<{
  modelValue: string,
  placeholder?: string,
}>()

const value = defineModel<typeof modelValue>()
</script>

<template>
  <div class="authentication-input">
    <template v-if="value !== void 0">
      <input autocomplete="new-password" type="text" :placeholder="placeholder" v-model="value"/>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Authentication/AuthenticationInput.module";
</style>