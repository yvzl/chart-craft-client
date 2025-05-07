<script setup lang="ts">
import {ref} from "vue";
import Submit from "@/components/Common/Submit.vue";
import AuthenticationInputPassword from "@/components/Authentication/AuthenticationInputPassword.vue";

const newP = ref("")
const reP = ref("")
</script>

<template>
  <div class="edit-password">
    <div class="box">
      <p>新密码</p>
      <AuthenticationInputPassword :classList="['password']" v-model="newP" />
    </div>
    <div class="box">
      <p>确认密码</p>
      <AuthenticationInputPassword :classList="['password']" v-model="reP" />
    </div>
    <div class="update">
      <Submit type="primary" value="更新密码" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/User/EditPassword.module";
</style>