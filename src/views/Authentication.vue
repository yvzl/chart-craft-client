<script setup lang="ts">
import {ref} from "vue";
import Forgot from "@/components/Authentication/Forgot.vue";
import Login from "@/components/Authentication/Login.vue";
import Register from "@/components/Authentication/Register.vue";

const state = ref(true)
const state2 = ref(true)
</script>

<template>
  <div class="authentication">
    <div class="main">
      <div class="deco">
        <img src="@/assets/images/analyze_man.png" alt="?">
      </div>
      <div class="box">
        <div class="logo">
          <img src="@/assets/images/logo.png" alt="?"/>
          <p>免费的在线图表制作工具</p>
        </div>
        <div class="form">
          <div class="login" v-if="state">
            <ul class="bar">
              <li :class="{active: state2}" @click="state2 = true">登录</li>
              <li :class="{active: !state2}" @click="state2 = false">注册</li>
            </ul>
            <div class="main">
              <template v-if="state2">
                <Login v-model="state"/>
              </template>
              <Register v-else/>
            </div>
          </div>
          <div class="forgot" v-else>
            <ul class="bar">
              <li class="active">重置密码</li>
            </ul>
            <div class="main">
              <Forgot v-model="state"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/Authentication/Authentication.module";
</style>