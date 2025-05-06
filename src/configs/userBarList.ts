import type {ComponentMap, IUserBar} from "@/types";
import EditInfo from "@/components/EditInfo.vue";
import EditPassword from "@/components/EditPassword.vue";

export const userBarList: IUserBar[] = [{
    id: "1",
    title: "基本信息",
}, {
    id: "2",
    title: "修改密码",
}]

export const userBatListMap: ComponentMap = {
    1: EditInfo,
    2: EditPassword,
}