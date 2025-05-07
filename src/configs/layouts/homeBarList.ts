import type {Ref} from "vue"
import type {INavBarItem, EventMap, StateMap} from "@/types"
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

export const homeBarEventMap: EventMap = {
    1(data: Ref<StateMap>, id: string) {
        data.value[id] = !data.value[id]
    },
    2(data: Ref<StateMap>, id: string) {
        data.value[id] = !data.value[id]
    },
}