import type {ObjectOption} from "@/types";
import {
    show,
    fontSize,
    fontWeight,
    fontFamily,
    fontStyle,
    rotate,
    opacity,
    distance,
    position,
    align,
    verticalAlign,
    width,
    type,
    symbol,
} from "@/configs/charts/structures/subs";

export const line: ObjectOption = {
    name: "折线图",
    type: "object",
    children: {
        symbol,
        showSymbol: {
            name: "是否显示标记",
            type: "boolean"
        },
        symbolRotate: {
            name: "标记旋转角度",
            type: "number",
            min: 0,
            max: 360
        },
        connectNulls: {
            name: "是否连接空数据",
            type: "boolean"
        },
        step: {
            name: "开启阶梯线图",
            type: "boolean"
        },
        label: {
            name: "标签设置",
            type: "object",
            children: {
                show, fontSize, fontWeight, fontFamily, fontStyle, rotate, distance, position, align, verticalAlign
            }
        },
        lineStyle: {
            name: "线条样式",
            type: "object",
            children: {
                width, type, opacity
            }
        },
        areaStyle: {
            name: "区域填充样式",
            type: "object",
            children: {
                origin: {
                    name: "起始位置",
                    type: "map",
                    data: {
                        auto: "自动",
                        start: "轴底部到数据",
                        end: "轴顶部到数据"
                    }
                },
                opacity
            }
        },
    }
}