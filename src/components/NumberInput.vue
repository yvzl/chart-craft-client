<script setup lang="ts">
import {ref, watch} from "vue";
import {useModel} from "@/hooks";
import {UpOne, DownOne} from "@icon-park/vue-next"

const props = defineProps<{
  modelValue: number | string
  min?: number
  max?: number
  step?: number
}>()

const {min = 0, max = 100, step = 1, modelValue} = props

const emits = defineEmits(["update:modelValue"])

const value = useModel(modelValue, props, "modelValue", emits, "update:modelValue")

const newVal = ref<number>(min)

const handleChange = () => {
  const val = value.value
  if(typeof val === "string" || val < min + step - 1) {
    value.value = min
    return
  }
  if(val > max) {
    value.value = max
    return;
  }
}

const add = () => {
  if(typeof value.value === "string" || value.value + step > max) {
    value.value = max
  }else {
    value.value += step
  }
}

const remove = () => {
  if(typeof value.value === "string" || value.value - step < min) {
    value.value = min
  }else {
    value.value -= step
  }
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
@use "@/assets/styles/NumberInput.module";
</style>