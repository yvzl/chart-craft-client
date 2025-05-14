<script setup lang="ts">
import {ref, type Ref} from "vue";
import TextInput from "@/components/Common/TextInput.vue";
import Select from "@/components/Common/Select.vue";
import AreaText from "@/components/Common/AreaText.vue";
import Submit from "@/components/Common/Submit.vue";
import Upload from "@/components/Common/Upload.vue";
import CropImage from "@/components/User/CropImage.vue";
import {userStore} from "@/stores"
import {storeToRefs} from "pinia";
import type {IUser} from "@/types";
import {useMessage} from "@/hooks";

const store = userStore()
const {changeData} = store
const {user, userState} = storeToRefs(store)

const name = ref("")
const gender = ref("1")
const introduce = ref("")

const avatar = ref<File | null>(null)

const map: Partial<Record<keyof Omit<IUser, 'id'>, Ref<IUser[keyof Omit<IUser, 'id'>]>>> = {
  name,
  gender,
  introduce
}

const data = {
  0: "男",
  1: "女"
}

const init = () => {
  const data = user.value
  if (!data) return
  const {name: a, gender: b, introduce: c} = data
  name.value = a
  gender.value = b
  introduce.value = c
}

const updateMessage = () => {
  for (const key in map) {
    const k = key as keyof typeof map
    const val = map[k]?.value
    if (val === void 0 || val === user.value?.[k]) continue
    changeData(userState.value, k, val)
  }
  useMessage("success", "修改成功")
}

init()
</script>

<template>
  <div class="edit-info">
    <div class="left">
      <div class="info-box">
        <p>名称</p>
        <TextInput v-model="name"/>
      </div>
      <div class="info-box">
        <p>性别</p>
        <Select v-model="gender" :data="data"/>
      </div>
      <div class="info-box introduce">
        <p>个人介绍</p>
        <AreaText :rows="15" v-model="introduce"/>
      </div>
      <div class="save">
        <Submit @click="updateMessage" type="primary" value="更新信息"/>
      </div>
    </div>
    <div class="right">
      <Upload v-model="avatar" tips="选择图片上传，文件大小不得超过1MB"/>
      <div class="image">
        <CropImage :image="avatar"/>
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