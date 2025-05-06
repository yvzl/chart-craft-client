<script setup lang="ts">
import {ref} from "vue"
import {useModel} from "@/hooks";
import Submit from "@/components/Submit.vue";
import AuthenticationInput from "@/components/AuthenticationInput.vue";
import AuthenticationInputPassword from "@/components/AuthenticationInputPassword.vue";

const props = defineProps<{
  modelValue: boolean
}>()

const {modelValue} = props
const emits = defineEmits(["update:modelValue", "update:state"]);

const value = useModel(modelValue, props, "modelValue", emits, "update:modelValue");

const email = ref("")
const password = ref("")
</script>

<template>
  <form class="login">
    <AuthenticationInput v-model="email" placeholder="邮箱"/>
    <AuthenticationInputPassword :classList="['input']" v-model="password" placeholder="密码"/>
    <div @click="value = false" class="forgot">忘记密码</div>
    <Submit type="primary" :classList="['login-btn']" value="登录"/>
  </form>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Login.module";
</style>