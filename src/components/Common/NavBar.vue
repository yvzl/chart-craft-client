<script setup lang="ts">
import {ref, watch} from "vue";
import type {INavBarItem} from "@/types"

const {barList} = defineProps<{
  barList: INavBarItem[]
}>()

const emits = defineEmits();

type StateMap = Record<INavBarItem["id"], boolean>

const resetMap = () => stateMap.value = barList.reduce((acc: StateMap, {id}) => {
  acc[id] = false
  return acc
}, {})

const stateMap = ref<StateMap>({})

const handleClick = (id: INavBarItem["id"], eventName: INavBarItem["eventName"]) => emits(eventName, stateMap, id)

watch(() => barList, () => resetMap(), {immediate: true});
</script>

<template>
  <div class="nav-bar">
    <ul>
      <li v-for="{id, icon, name, eventName} in barList" @click="handleClick(id, eventName)" :class="{'nav-bar-item': true, active: stateMap[id]}" :key="id">
        <Component :is="icon"/>
        <span>{{ name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Common/NavBar.module";
</style>