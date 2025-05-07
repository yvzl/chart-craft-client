<script setup lang="ts">
import {ref} from 'vue';
import Submit from "@/components/Submit.vue";
import CheckCodeOuter from "@/components/CheckCodeOuter.vue";
import AuthenticationInput from "@/components/AuthenticationInput.vue";
import CheckEmailCodeOuter from "@/components/CheckEmailCodeOuter.vue";
import AuthenticationInputPassword from "@/components/AuthenticationInputPassword.vue";

const email = ref("");
const password = ref("");
const requiredPassword = ref("")
const code = ref("")
const emailCode = ref("")
</script>

<template>
  <form class="register">
    <AuthenticationInput v-model="email" placeholder="请输入邮箱"/>
    <div class="input">
      <AuthenticationInputPassword type="password" v-model="password" placeholder="请输入密码"/>
    </div>
    <div class="input">
      <AuthenticationInputPassword type="password" v-model="requiredPassword" placeholder="确认密码"/>
    </div>
    <div class="input">
      <CheckCodeOuter v-model="code" placeholder="请输入校验码"/>
    </div>
    <div class="input">
      <CheckEmailCodeOuter v-model="emailCode" placeholder="请输入验证码" :cd="60"/>
    </div>
    <div class="register-btn">
      <Submit type="primary" :classList="['btn']" value="注册"/>
    </div>
  </form>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Register.module";
</style>