<script setup lang="ts">
import {ref} from "vue"
import {useModel} from "@/hooks";
import Submit from "@/components/Common/Submit.vue";
import AuthenticationInput from "@/components/Authentication/AuthenticationInput.vue";
import AuthenticationInputPassword from "@/components/Authentication/AuthenticationInputPassword.vue";

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
    <div class="input">
      <AuthenticationInputPassword v-model="password" placeholder="密码"/>
    </div>
    <div @click="value = false" class="forgot">忘记密码</div>
    <div class="login-btn">
      <Submit type="primary" :classList="['btn']" value="登录"/>
    </div>
  </form>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Authentication/Login.module";
</style>