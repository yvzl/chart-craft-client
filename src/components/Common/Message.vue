<script setup lang="ts">
import {ref, onMounted, useTemplateRef} from "vue";
import {Info, Attention, CheckOne, CloseSmall} from "@icon-park/vue-next"
import type {IMessage} from "@/types"

const {duration = 2000, value = "", type = "info"} = defineProps<IMessage>()
const emits = defineEmits(["close"])

const state = ref(false)

const message = useTemplateRef<HTMLDivElement>("message")

const close = async (duration: IMessage["duration"] = 0) => {
  await new Promise(resolve => setTimeout(() => {
    state.value = false
    resolve(true)
  }, duration))
  setTimeout(() => emits("close"), 300)
}

onMounted(async () => {
  state.value = true
  await close(duration)
})
</script>

<template>
  <div class="message">
    <transition>
      <div ref="message" :class="`message-main ${type}`" v-if="state">
        <div class="tips">
          <div class="icon">
            <CheckOne v-if="type === 'success'"/>
            <Attention v-else-if="type === 'error'"/>
            <Info v-else-if="type === 'info'"/>
          </div>
          <p>{{ value }}</p>
        </div>
        <div @click="close()" class="close">
          <CloseSmall/>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Common/Message.module";
</style>