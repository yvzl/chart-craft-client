<script setup lang="ts">
import Scroll from "@/components/Scroll.vue";
import Submit from "@/components/Submit.vue";

const {height = 0} = defineProps<{
  height?: number
}>()

const colArr = " ABCDEFGH"
</script>

<template>
  <div class="edit-data">
    <Scroll :height="height">
      <div class="edit-data-main">
        <div class="box">
          <div class="other-content">
            <div class="table-outer">
              <table>
                <tr v-for="(item, i) in 21" :key="i">
                  <template v-if="i === 0">
                    <th class="col" v-for="value in colArr">
                      <div>{{ value }}</div>
                    </th>
                  </template>
                  <template v-else>
                    <th :style="{borderTop: i === 1 ? 'none' : '1px solid #ccc'}" class="row">
                      <div>{{ item - 1 }}</div>
                    </th>
                    <td :style="{borderTop: i === 1 ? 'none' : '1px solid #ccc'}" v-for="() in colArr.length">
                      <input/>
                    </td>
                  </template>
                </tr>
              </table>
            </div>
            <div class="btn-list">
              <Submit value="导出数据"/>
              <Submit type="primary" value="导入数据"/>
              <Submit value="确认"/>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/EditData.module";
</style>