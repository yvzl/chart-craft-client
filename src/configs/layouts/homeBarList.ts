import type {Ref} from "vue"
import type {INavBarItem, Fn} from "@/types"
import {Search, Delete} from "@icon-park/vue-next"

export const homeBarList: INavBarItem[] = [{
    id: "1",
    name: "搜索",
    icon: Search,
    eventName: "search",
}, {
    id: "2",
    name: "批量删除",
    icon: Delete,
    eventName: "delete",
}]

type StateMap = Record<INavBarItem["id"], boolean>

export const homeBarEventMap: Record<INavBarItem["id"], Fn> = {
    1(data: Ref<StateMap>, id: INavBarItem["id"]) {
        data.value[id] = !data.value[id]
    },
    2(data: Ref<StateMap>, id: INavBarItem["id"]) {
        data.value[id] = !data.value[id]
    },
}