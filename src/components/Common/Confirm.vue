<script setup lang="ts">
import Modal from "@/components/Common/Modal.vue";

const {state, value = ""} = defineProps<{
  state: boolean,
  value?: string
}>()

const emits = defineEmits(["cancel", "confirm", "mounted"])
</script>

<template>
  <div class="confirm">
    <template v-if="state !== void 0">
      <Modal @cancel="emits('cancel')" @confirm="emits('confirm')" @mounted="emits('mounted')" :state="state" :showClose="false">
        <template #content>
          <div class="content">
            <p>{{ value }}</p>
          </div>
        </template>
      </Modal>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Common/Confirm.module";
</style>