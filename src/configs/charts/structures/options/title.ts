import type {ObjectOption} from "@/types";
import {
    show,
    color,
    fontStyle,
    fontWeight,
    fontFamily,
    fontSize,
    left,
    right,
    top,
    bottom
} from "@/configs/charts/structures/subs";

export const title: ObjectOption = {
    name: "标题",
    type: "object",
    children: {
        show,
        text: {
            name: "标题文本",
            type: "string",
        },
        textStyle: {
            name: "标题样式",
            type: "object",
            children: {
                color,
                fontStyle,
                fontWeight,
                fontFamily,
                fontSize,
            }
        },
        subtext: {
            name: "副标题文本",
            type: "string",
        },
        subtextStyle: {
            name: "副标题样式",
            type: "object",
            children: {
                color,
                fontStyle,
                fontWeight,
                fontFamily,
                fontSize,
            }
        },
        textAlign: {
            name: "水平对齐方式",
            type: "map",
            data: {
                left: "左侧",
                center: "居中",
                right: "右侧",
            }
        },
        textVerticalAlign: {
            name: "垂直对齐方式",
            type: "map",
            data: {
                top: "顶部",
                middle: "居中",
                bottom: "底部"
            }
        },
        itemGap: {
            name: "主副标题间距",
            type: "number",
            min: 1,
            max: 100
        },
        left,
        right,
        top,
        bottom,
    }
}