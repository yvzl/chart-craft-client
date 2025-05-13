<script setup lang="ts">
import {ref} from 'vue';
import Submit from "@/components/Common/Submit.vue";
import CheckCodeOuter from "@/components/Authentication/CheckCodeOuter.vue";
import AuthenticationInput from "@/components/Authentication/AuthenticationInput.vue";
import CheckEmailCodeOuter from "@/components/Authentication/CheckEmailCodeOuter.vue";
import AuthenticationInputPassword from "@/components/Authentication/AuthenticationInputPassword.vue";

const {modelValue} = defineProps<{
  modelValue: boolean
}>()

const state = defineModel<typeof modelValue>()

const email = ref("");
const password = ref("");
const requiredPassword = ref("")
const code = ref("")
const emailCode = ref("")
</script>

<template>
  <form class="forgot">
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
      <Submit type="primary" :classList="['btn']" value="重置密码"/>
    </div>
    <div class="return-btn" @click="state = true">返回登录页面</div>
  </form>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Authentication/Forgot.module";
</style>