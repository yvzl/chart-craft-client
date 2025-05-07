<script setup lang="ts">
import {ref} from "vue";
import TextInput from "@/components/Common/TextInput.vue";
import Select from "@/components/Common/Select.vue";
import AreaText from "@/components/Common/AreaText.vue";
import Submit from "@/components/Common/Submit.vue";
import Upload from "@/components/Common/Upload.vue";
import CropImage from "@/components/User/CropImage.vue";

const text = ref("")
const gender = ref("1")
const area = ref("")
const data = {
  1: "男",
  2: "女"
}
const file = ref<File | null>(null)
</script>

<template>
  <div class="edit-info">
    <div class="left">
      <div class="info-box">
        <p>名称</p>
        <TextInput v-model="text"/>
      </div>
      <div class="info-box">
        <p>性别</p>
        <Select v-model="gender" :data="data"/>
      </div>
      <div class="info-box introduce">
        <p>个人介绍</p>
        <AreaText :rows="15" v-model="area"/>
      </div>
      <div class="save">
        <Submit type="primary" value="更新信息"/>
      </div>
    </div>
    <div class="right">
      <Upload v-model="file" tips="选择图片上传，文件大小不得超过1MB"/>
      <div class="image">
        <CropImage :image="file" />
      </div>
      <div class="save head">
        <Submit type="primary" value="更新头像"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/User/EditInfo.module";
</style>