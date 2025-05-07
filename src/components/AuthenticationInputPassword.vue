<script setup lang="ts">
import {ref} from 'vue';
import {useModel} from "@/hooks";
import {PreviewOpen, PreviewCloseOne} from "@icon-park/vue-next"

const props = defineProps<{
  modelValue: string
  placeholder?: string
  classList?: Array<string>
}>()

const {modelValue, placeholder = "", classList = []} = props
const emits = defineEmits(["update:modelValue"])
const value = useModel(modelValue, props, "modelValue", emits, "update:modelValue")
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
@use "@/assets/styles/AuthenticationInput.module";
@use "@/assets/styles/AuthenticationInputPassword.module";
</style>