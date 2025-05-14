<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from "vue"
import {userStore} from "@/stores"
import Submit from "@/components/Common/Submit.vue";
import AuthenticationInput from "@/components/Authentication/AuthenticationInput.vue";
import AuthenticationInputPassword from "@/components/Authentication/AuthenticationInputPassword.vue";

const {modelValue} = defineProps<{
  modelValue: boolean
}>()

const {changeState} = userStore()

const value = defineModel<typeof modelValue>()

const router = useRouter()

const email = ref("")
const password = ref("")

const login = () => {
  changeState("1")
  router.push({name: "Home"}).then()
}
</script>

<template>
  <div class="login">
    <AuthenticationInput v-model="email" placeholder="邮箱"/>
    <div class="input">
      <AuthenticationInputPassword v-model="password" placeholder="密码"/>
    </div>
    <template v-if="value !== void 0">
      <div @click="value = false" class="forgot">忘记密码</div>
    </template>
    <div class="login-btn">
      <Submit @click="login" type="primary" :classList="['btn']" value="登录"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Authentication/Login.module";
</style>