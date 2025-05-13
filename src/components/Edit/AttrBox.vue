<script setup lang="ts">
import type {EChartsOption} from "echarts"
import type {ChartOptionMap, NumberOption} from "@/types";
import CheckBox from "@/components/Common/CheckBox.vue";
import TextInput from "@/components/Common/TextInput.vue";
import NumberInput from "@/components/Common/NumberInput.vue";
import ColorInput from "@/components/Common/ColorInput.vue";
import Select from "@/components/Common/Select.vue";

const {modelValue, level = 1} = defineProps<{
  modelValue: EChartsOption
  option: ChartOptionMap
  level?: number
}>()

const data = defineModel<typeof modelValue>()
</script>

<template>
  <div class="attr-box">
    <template v-if="data">
      <template v-for="(_, key) in data">
        <template v-if="option[key] && data[key] !== void 0">
          <template v-if="option[key].type === 'object' && typeof data[key] === 'object'">
            <div :class="`box${level}`">
              <div class="header">{{ option[key].name }}</div>
              <AttrBox v-model="data[key] as EChartsOption" :option="option[key].children" :level="level + 1"/>
            </div>
          </template>
          <template v-else>
            <div class="attr">
              <span class="name">{{ option[key].name }}：</span>
              <template v-if="option[key].type === 'string' && typeof data[key] === 'string'">
                <div class="string">
                  <TextInput v-model="data[key]"/>
                </div>
              </template>
              <template
                  v-else-if="option[key].type === 'number' && (typeof data[key] === 'number' || typeof data[key] === 'string')">
                <div class="number">
                  <NumberInput v-model="data[key]" :min="(option[key] as NumberOption).min"
                               :max="(option[key] as NumberOption).max"/>
                </div>
              </template>
              <template v-else-if="option[key].type === 'boolean' && typeof data[key] === 'boolean'">
                <div class="boolean">
                  <CheckBox v-model="data[key]"/>
                </div>
              </template>
              <template v-else-if="option[key].type === 'color' && typeof data[key] === 'string'">
                <div class="color">
                  <ColorInput v-model="data[key]"/>
                </div>
              </template>
              <template v-else-if="option[key].type === 'map' && typeof data[key] === 'string'">
                <div class="map">
                  <Select v-model="data[key]" :data="option[key].data"/>
                </div>
              </template>
            </div>
          </template>
        </template>
      </template>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Edit/AttrBox.module";
</style>