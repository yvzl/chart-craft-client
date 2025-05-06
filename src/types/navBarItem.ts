import {type Icon} from "@icon-park/vue-next/lib/runtime"

export interface INavBarItem {
    id: string
    name: string
    icon: Icon | null
    eventName: string
}