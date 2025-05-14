<script setup lang="ts">
import {ref} from "vue";
import {mapEvent} from "@/utils"
import {useRoute} from "vue-router"
import {editBarList, editBarEventMap, collapseList} from "@/configs"
import Header from "@/components/Common/Header.vue";
import NavBar from "@/components/Common/NavBar.vue";
import Collapse from "@/components/Edit/Collapse.vue";
import ChartView from "@/components/Edit/ChartView.vue";
import Modal from "@/components/Common/Modal.vue";

const route = useRoute()

if (route.name === 'Create') {
} else {
}

const state = ref("1")

const NavBarEmits = mapEvent(editBarList, editBarEventMap)
</script>

<template>
  <div class="edit">
    <Header/>
    <NavBar v-on="NavBarEmits" :barList="editBarList"/>
    <div class="main">
      <div class="chart">
        <ChartView/>
      </div>
      <Collapse :data="collapseList" v-model="state"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Edit/Edit.module";
</style>