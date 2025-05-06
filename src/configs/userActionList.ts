import type {IUserAction, EventMap} from "@/types";
import router from "@/router";

export const userActions: IUserAction[] = [{
    id: "1",
    name: "返回主页",
    eventName: "play",
}, {
    id: "2",
    name: "退出登录",
    eventName: "share",
}]

export const userActionsEventMap: EventMap = {
    1() {
        router.push({
            name: "Home",
        }).then()
    },
    2() {

    },
}