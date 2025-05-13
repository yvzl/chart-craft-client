<script setup lang="ts">
import {ref} from 'vue';
import {PreviewOpen, PreviewCloseOne} from "@icon-park/vue-next"

const {placeholder = "", classList = [], modelValue} = defineProps<{
  modelValue: string
  placeholder?: string
  classList?: string[]
}>()

const value = defineModel<typeof modelValue>()
const state = ref(false)
</script>

<template>
  <div :class="`authentication-input authentication-input-password ${classList.join(' ')}`">
    <input autocomplete="new-password" :type="state ? 'text' : 'password'" :placeholder="placeholder" v-model="value"/>
    <div class="mode" @click="state = !state">
      <PreviewOpen v-if="state"/>
      <PreviewCloseOne v-else/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Authentication/AuthenticationInput.module";
@use "@/assets/styles/Authentication/AuthenticationInputPassword.module";
</style>