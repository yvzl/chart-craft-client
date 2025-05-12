import type {IChartBtn, Fn} from "@/types"
import {PlayOne, ShareOne, Editor, Delete} from "@icon-park/vue-next"
import router from "@/router";

export const chartBtnList: IChartBtn[] = [{
    id: "1",
    name: "播放",
    icon: PlayOne,
    eventName: "play",
}, {
    id: "2",
    name: "分享",
    icon: ShareOne,
    eventName: "share",
}, {
    id: "3",
    name: "编辑",
    icon: Editor,
    eventName: "edit",
}, {
    id: "4",
    name: "删除",
    icon: Delete,
    eventName: "delete",
}]

export const chartBtnEventMap: Record<IChartBtn["id"], Fn> = {
    1(_: IChartBtn["id"]) {

    },
    2(_: IChartBtn["id"]) {

    },
    3(id: IChartBtn["id"]) {
        router.push({
            name: "Edit",
            params: {id}
        }).then()
    },
    4(_: IChartBtn["id"]) {

    }
}