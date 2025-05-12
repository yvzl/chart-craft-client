import EditInfo from "@/components/User/EditInfo.vue";
import EditPassword from "@/components/User/EditPassword.vue";
import type {IUserBar} from "@/types";
import type {Component} from "vue";


export const userBarList: IUserBar[] = [{
    id: "1",
    title: "基本信息",
}, {
    id: "2",
    title: "修改密码",
}]

export const userBatListMap: Record<IUserBar["id"], Component> = {
    1: EditInfo,
    2: EditPassword,
}