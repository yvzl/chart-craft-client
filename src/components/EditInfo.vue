<script setup lang="ts">
import TextInput from "@/components/TextInput.vue";
import Select from "@/components/Select.vue";
</script>

<template>
  <div class="edit-info">
    <div class="left">
      <div class="info-box">
        <p>名称</p>
<!--        <TextInput v-model="" />-->
      </div>

      <div class="info-box">
        <p>性别</p>
<!--        <Select v-model="" :data="" />-->
      </div>

      <div class="info-box introduce">
        <p>个人介绍</p>
<!--        <textarea />-->

      </div>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/EditInfo.module";
</style>