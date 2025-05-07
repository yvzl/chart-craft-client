import {chartOption} from "@/types";

export const labelConfigs2: chartOption = {
    distance: {
        name: "和图形元素的距离",
        type: "number",
        min: 0,
        max: 100
    },
    align: {
        name: "水平对齐方式",
        type: "map",
        data: {
            left: "左侧",
            center: "居中",
            right: "右侧",
        }
    },
    verticalAlign: {
        name: "垂直对齐方式",
        type: "map",
        data: {
            top: "顶部",
            middle: "居中",
            bottom: "底部"
        }
    },
    position: {
        name: "位置",
        type: "map",
        data: {
            top: "顶部",
            left: "左侧",
            right: "右侧",
            bottom: "底部",
            inside: "内侧",
        }
    },
}