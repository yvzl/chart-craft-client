import {labelConfigs, labelConfigs2, opacityConfigs} from "@/configs";
import type {chartOption} from "@/types";

export const barConfigs: chartOption = {
    showBackground: {
        name: "柱条背景显示",
        type: "boolean"
    },
    label: {
        name: "标签样式",
        type: "object",
        children: {
            ...labelConfigs,
            ...labelConfigs2,
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
            ...opacityConfigs
        }
    },
    barWidth: {
        name: "柱条宽度",
        type: "string",
    },
    barCategoryGap: {
        name: "柱间距离",
        type: "string",
    },
    barGap: {
        name: "系列柱间距离",
        type: "string",
    },
}