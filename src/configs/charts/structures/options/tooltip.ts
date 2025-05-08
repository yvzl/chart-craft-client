import {
    show,
    color,
    fontStyle,
    fontWeight,
    fontFamily,
    fontSize,
} from "@/configs/charts/structures/subs";
import type {ObjectOption} from "@/types";

export const tooltip: ObjectOption = {
    name: "提示框",
    type: "object",
    children: {
        show,
        trigger: {
            name: "触发方式",
            type: "map",
            data: {
                item: "数据项",
                axis: "坐标轴",
                none: "不触发"
            }
        },
        showContent: {
            name: "是否显示浮层",
            type: "boolean",
        },
        alwaysShowContent: {
            name: "是否永远显示内容",
            type: "boolean",
        },
        triggerOn: {
            name: "触发方式",
            type: "map",
            data: {
                mousemove: "鼠标移动",
                click: "鼠标点击",
                none: "不触发"
            }
        },
        enterable: {
            name: "鼠标是否可以进入浮层",
            type: "boolean",
        },
        confine: {
            name: "是否限制在图表区域内",
            type: "boolean",
        },
        backgroundColor: {
            name: "背景颜色",
            type: "color",
        },
        borderColor: {
            name: "边框颜色",
            type: "color",
        },
        borderWidth: {
            name: "边框宽",
            type: "number",
            min: 0,
            max: 50
        },
        textStyle: {
            name: "字体样式",
            type: "object",
            children: {
                color,
                fontStyle,
                fontWeight,
                fontFamily,
                fontSize,
            }
        },
        transitionDuration: {
            name: "过渡时间",
            type: "number",
            min: 0,
            max: 10
        }
    }
}