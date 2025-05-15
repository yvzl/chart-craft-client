<script setup lang="ts">
import {onMounted, type EmitFn} from 'vue';
import {CloseSmall} from "@icon-park/vue-next";
import type {HasModalEmits} from "@/types"
import Submit from "@/components/Common/Submit.vue";

const {title = "提示", showClose = true} = defineProps<{
  state: boolean,
  title?: string,
  showClose?: boolean,
}>()

const emits: EmitFn<HasModalEmits> = defineEmits(["cancel", "confirm", "mounted"]);

onMounted(() => emits("mounted"))
</script>

<template>
  <div class="modal">
    <teleport to="body">
      <transition>
        <div v-if="state" class="modal-main">
          <div class="header box">
            <p>{{ title }}</p>
            <template v-if="showClose">
              <div class="close">
                <CloseSmall/>
              </div>
            </template>
          </div>
          <div class="content box">
            <slot name="content"></slot>
          </div>
          <div class="footer box">
            <slot name="footer">
              <div class="btn">
                <Submit @click="emits('confirm')" :classList="['s-btn']" type="primary" value="确认"/>
              </div>
              <div class="btn">
                <Submit @click="emits('cancel')" :classList="['s-btn']" value="取消"/>
              </div>
            </slot>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Common/Model.module";
</style>