import router from "@/router"
import {useConfirm} from "@/hooks";
import type {RouteRecordNameGeneric} from "vue-router";

export const leaveEdit = (name: RouteRecordNameGeneric) => useConfirm("确定要离开吗？未保存的更改将丢失。", () => router.push({name}).then())