<script setup lang="ts">
import {useRouter} from "vue-router";
import Avatar from "@/components/Avatar.vue";

const router = useRouter();
</script>

<template>
  <div class="header">
    <img @click="router.push({name: 'Home'})" src="@/assets/images/logo.png" alt="?"/>
    <div @click="router.push({name: 'User'})" class="user">
      <div class="head">
        <Avatar/>
      </div>
      <div class="name">_wx 6459</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Header.module";
</style>