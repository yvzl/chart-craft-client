<script setup lang="ts">
import {ref, watch} from "vue";
import {UpOne, DownOne} from "@icon-park/vue-next"

const {min = 0, max = 100, step = 1, modelValue} = defineProps<{
  modelValue: number | string
  min?: number
  max?: number
  step?: number
}>()

const value = defineModel<typeof modelValue>()

const newVal = ref<number>(min)

const handleChange = () => {
  const val = value.value
  console.log(value.value)
  if (val === void 0) return
  if (typeof val === "string" || val < min + step - 1) {
    value.value = min
    return
  }
  if (val > max) {
    value.value = max
    return;
  }
}

const add = () => {
  if (value.value === void 0) return
  value.value = typeof value.value === "string" || value.value + step > max ? max : value.value + step
}

const remove = () => {
  if (value.value === void 0) return
  value.value = typeof value.value === "string" || value.value - step < min ? min : value.value - step
}

watch(value, newVal_ => typeof newVal_ === "number" && newVal_ >= min && newVal_ <= max && (newVal.value = newVal_), {immediate: true})
</script>

<template>
  <div class="number-input">
    <input @change="handleChange" v-model="value" type="number"/>
    <div class="arrow">
      <div @click="add" class="up">
        <UpOne theme="filled"/>
      </div>
      <div @click="remove" class="down">
        <DownOne theme="filled"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Common/NumberInput.module";
</style>