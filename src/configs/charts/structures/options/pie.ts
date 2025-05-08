import type {ObjectOption} from "@/types";
import {
    show,
    rotate,
    fontSize,
    fontWeight,
    fontFamily,
    fontStyle,
    width,
    type,
    opacity
} from "@/configs/charts/structures/subs";

export const pie: ObjectOption = {
    name: "饼图",
    type: "object",
    children: {
        clockwise: {
            name: "是否顺时针分布",
            type: "boolean"
        },
        startAngle: {
            name: "旋转角度",
            type: "number",
            min: 0,
            max: 360
        },
        minAngle: {
            name: "最小扇区角度",
            type: "number",
            min: 0,
            max: 360
        },
        padAngle: {
            name: "间隔角度",
            type: "number",
            min: 0,
            max: 360
        },
        roseType: {
            name: "开启南丁格尔图",
            type: "boolean",
        },
        label: {
            name: "标签设置",
            type: "object",
            children: {
                show, rotate, fontSize, fontWeight, fontFamily, fontStyle,
                position: {
                    name: "位置",
                    type: "map",
                    data: {
                        outside: "外侧",
                        inside: "内侧",
                        center: "中心",
                    }
                },
                bleedMargin: {
                    name: "出血线大小",
                    type: "number",
                    min: 1,
                    max: 100
                },
                distanceToLabelLine: {
                    name: "和视觉引导线的距离",
                    type: "number",
                    min: 1,
                    max: 100
                }
            }
        },
        labelLine: {
            name: "视觉引导线设置",
            type: "object",
            children: {
                show: {
                    name: "是否显示",
                    type: "boolean",
                },
                smooth: {
                    name: "开启平滑模式",
                    type: "boolean"
                },
                lineStyle: {
                    name: "引导线样式",
                    type: "object",
                    children: {
                        width, type, opacity
                    }
                }
            }
        }
    }
}