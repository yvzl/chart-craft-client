<script setup lang="ts">
import {ref} from 'vue'
import {mapEvent} from "@/utils";
import {userActions, userActionsEventMap, userBarList, userBatListMap} from "@/configs";
import Header from "@/components/Common/Header.vue";
import Avatar from "@/components/Common/Avatar.vue";
import UserAction from "@/components/User/UserAction.vue";
import UserBar from "@/components/User/UserBar.vue";
import {storeToRefs} from "pinia";
import {userStore} from "@/stores";

const {user} = storeToRefs(userStore())

const state = ref("1")
const userActionsListEmits = mapEvent(userActions, userActionsEventMap)
</script>

<template>
  <div class="user">
    <Header/>
    <div class="main">
      <div class="info">
        <div class="head">
          <Avatar :src="user?.avatar"/>
        </div>
        <p>{{ user?.name }}</p>
        <UserAction v-on="userActionsListEmits" :data="userActions"/>
      </div>
      <div class="content">
        <div class="content-main">
          <UserBar :data="userBarList" v-model="state"/>
          <Component :is="userBatListMap[state]"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/User/User.module";
</style>