import router from "@/router";
import type {Ref} from "vue"
import type {Fn, INavBarItem} from "@/types"
import {PlayOne, Save, SaveOne, ShareThree, ShareOne, Return} from "@icon-park/vue-next"
import {useConfirm, useMessage} from "@/hooks";

export const editBarList: INavBarItem[] = [{
    id: "1",
    name: "预览",
    icon: PlayOne,
    eventName: "search",
}, {
    id: "2",
    name: "保存",
    icon: Save,
    eventName: "save",
}, {
    id: "3",
    name: "另存为",
    icon: SaveOne,
    eventName: "otherSave",
}, {
    id: "4",
    name: "导出为",
    icon: ShareThree,
    eventName: "exportSave",
}, {
    id: "5",
    name: "分享",
    icon: ShareOne,
    eventName: "share",
}, {
    id: "6",
    name: "返回",
    icon: Return,
    eventName: "return",
}]

type StateMap = Record<INavBarItem["id"], boolean>

export const editBarEventMap: Record<INavBarItem["id"], Fn> = {
    1(_: Ref<StateMap>, __: string) {

    },
    2(_: Ref<StateMap>, __: string) {
        useMessage("success", "保存成功")
    },
    3(_: Ref<StateMap>, __: string) {

    },
    4(_: Ref<StateMap>, __: string) {

    },
    5(_: Ref<StateMap>, __: string) {
        useConfirm("确定要离开吗？未保存的更改将丢失。", () => {
            console.log(1)
        }, () => {
            console.log(2)
        })
    },
    6(_: Ref<StateMap>, __: string) {
        router.push({
            name: "Home"
        }).then()
    }
}