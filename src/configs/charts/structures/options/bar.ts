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
} from "@/configs/charts/structures/subs";
import type {ObjectOption} from "@/types";

export const bar: ObjectOption = {
    name: "柱形图",
    type: "object",
    children: {
        showBackground: {
            name: "是否显示背景",
            type: "boolean"
        },
        backgroundStyle: {
            name: "背景样式",
            type: "object",
            children: {
                opacity
            }
        },
        label: {
            name: "标签设置",
            type: "object",
            children: {
                show,
                rotate,
                fontStyle,
                fontSize,
                fontWeight,
                fontFamily,
                distance,
                align,
                verticalAlign,
                position
            },
        },
        itemStyle: {
            name: "柱条样式",
            type: "object",
            children: {
                borderRadius: {
                    name: "圆角半径",
                    type: "number",
                    min: 0,
                    max: 300
                },
                opacity
            }
        }
    }
}