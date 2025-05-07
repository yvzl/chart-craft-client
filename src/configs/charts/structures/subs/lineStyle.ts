import {opacityConfigs} from "@/configs";
import type {chartOption} from "@/types";

export const lineStyleConfigs: chartOption = {
    width: {
        name: "线宽",
        type: "number",
        min: 1,
        max: 10
    },
    type: {
        name: "线类型",
        type: "map",
        data: {
            solid: "实线",
            dashed: "虚线",
            dotted: "点线"
        },
    },
    ...opacityConfigs
}