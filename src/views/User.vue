<script setup lang="ts">
import {mapEvent} from "@/utils";
import {userActions, userActionsEventMap} from "@/configs";
import Header from "@/components/Header.vue";
import Avatar from "@/components/Avatar.vue";
import UserAction from "@/components/UserAction.vue";
import UserBar from "@/components/UserBar.vue";

const userActionsListEmits = mapEvent(userActions, userActionsEventMap)
</script>

<template>
  <div class="user">
    <Header/>
    <div class="main">
      <div class="info">
        <Avatar :classList="['head']"/>
        <p>_wx 6459</p>
        <UserAction v-on="userActionsListEmits" :data="userActions"/>
      </div>
      <div class="content">
        <UserBar />
<!--        <component :is="" />-->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/User.module";
</style>