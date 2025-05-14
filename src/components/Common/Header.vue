<script setup lang="ts">
import {leaveEdit} from "@/utils";
import {userStore} from "@/stores";
import {useRouter, useRoute, type RouteRecordNameGeneric} from "vue-router";
import Avatar from "@/components/Common/Avatar.vue";
import {storeToRefs} from "pinia";

const {user} = storeToRefs(userStore())

const router = useRouter();
const route = useRoute();
const toLocation = (name: RouteRecordNameGeneric) => route.name !== "Edit" && route.name !== "Create" ? router.push({name}) : leaveEdit(name)
</script>

<template>
  <div class="header">
    <img @click="toLocation('Home')" src="../../assets/images/logo.png" alt="?"/>
    <div @click="toLocation('User')" class="user">
      <div class="head">
        <Avatar :src="user?.avatar"/>
      </div>
      <div class="name">{{ user?.name }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Common/Header.module";
</style>