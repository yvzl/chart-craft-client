<script setup lang="ts">
import {ref} from 'vue';
import {useModel} from "@/hooks";
import Submit from "@/components/Submit.vue";
import CheckCodeOuter from "@/components/CheckCodeOuter.vue";
import AuthenticationInput from "@/components/AuthenticationInput.vue";
import CheckEmailCodeOuter from "@/components/CheckEmailCodeOuter.vue";
import AuthenticationInputPassword from "@/components/AuthenticationInputPassword.vue";

const props = defineProps<{
  modelValue: boolean
}>()

const emits = defineEmits(['update:modelValue']);

const {modelValue} = props

const state = useModel(modelValue, props, "modelValue", emits, "update:modelValue");

const email = ref("");
const password = ref("");
const requiredPassword = ref("")
const code = ref("")
const emailCode = ref("")
</script>

<template>
  <form class="forgot">
    <AuthenticationInput v-model="email" placeholder="请输入邮箱"/>
    <AuthenticationInputPassword type="password" :classList="['input']" v-model="password" placeholder="请输入密码"/>
    <AuthenticationInputPassword type="password" :classList="['input']" v-model="requiredPassword" placeholder="确认密码"/>
    <CheckCodeOuter :classList="['input']" v-model="code" placeholder="请输入校验码"/>
    <CheckEmailCodeOuter :classList="['input']" v-model="emailCode" placeholder="请输入验证码" :cd="60"/>
    <Submit type="primary" :classList="['register-btn']" value="重置密码"/>
    <div class="return-btn" @click="state = true">返回登录页面</div>
  </form>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Forgot.module";
</style>