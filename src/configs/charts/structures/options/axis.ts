import {
    align,
    color,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    show,
    verticalAlign,
    symbol,
    width,
    type,
    opacity,
    inside,
    rotate,
    margin
} from "@/configs/charts/structures/subs";
import type {ChartOptionMap, ObjectOption} from "@/types";

const children: ChartOptionMap = {
    show,
    offset: {
        name: "偏移度",
        type: "number",
        min: 0,
        max: 50
    },
    name: {
        name: "名称",
        type: "string",
    },
    nameLocation: {
        name: "名称位置",
        type: "map",
        data: {
            start: "起始",
            center: "居中",
            end: "结束"
        },
    },
    nameTextStyle: {
        name: "名称样式",
        type: "object",
        children: {
            color,
            fontStyle,
            fontWeight,
            fontFamily,
            fontSize,
            align,
            verticalAlign
        }
    },
    nameGap: {
        name: "名称距离",
        type: "number",
        min: 1,
        max: 50
    },
    nameRotate: {
        name: "名称旋转角度",
        type: "number",
        min: 0,
        max: 360
    },
    inverse: {
        name: "是否反向",
        type: "boolean",
    },
    min: {
        name: "最小值",
        type: "string",
    },
    max: {
        name: "最大值",
        type: "string",
    },
    splitNumber: {
        name: "分割段数",
        type: "number",
        min: 1,
        max: 100
    },
    axisLine: {
        name: "轴线设置",
        type: "object",
        children: {
            show,
            symbol,
            lineStyle: {
                name: "线条样式",
                type: "object",
                children: {
                    color,
                    width,
                    type,
                    opacity
                }
            }
        }
    },
    axisTick: {
        name: "刻度设置",
        type: "object",
        children: {
            show,
            alignWithLabel: {
                name: "是否对齐",
                type: "boolean",
            },
            inside,
            length: {
                name: "长度",
                type: "number",
                min: 1,
                max: 50
            },
            lineStyle: {
                name: "线条样式",
                type: "object",
                children: {
                    color,
                    width,
                    type,
                    opacity
                }
            },
        }
    },
    axisLabel: {
        name: "刻度标签设置",
        type: "object",
        children: {
            show,
            inside,
            rotate,
            margin,
            color,
            fontSize,
            fontWeight,
            fontFamily,
            fontStyle,
            align,
            verticalAlign,
        }
    },
    splitLine: {
        name: "分割线设置",
        type: "object",
        children: {
            show,
            lineStyle: {
                name: "线条样式",
                type: "object",
                children: {
                    color,
                    width,
                    opacity,
                    type
                }
            },
        }
    },
    axisPointer: {
        name: "指示器设置",
        type: "object",
        children: {
            show,
            type: {
                name: "类型",
                type: "map",
                data: {
                    line: "直线指示器",
                    shadow: "阴影指示器",
                    none: "无指示器"
                }
            },
            snap: {
                name: "是否吸附",
                type: "boolean",
            },
            label: {
                name: "指示器标签样式",
                type: "object",
                children: {
                    show,
                    margin,
                    color,
                    fontStyle,
                    fontWeight,
                    fontSize,
                    fontFamily,
                    width: {
                        name: "宽度",
                        type: "number",
                        min: 1,
                        max: 500
                    },
                    height: {
                        name: "高度",
                        type: "number",
                        min: 1,
                        max: 100
                    },
                }
            },
            lineStyle: {
                name: "线条样式",
                type: "object",
                children: {
                    color,
                    width,
                    type,
                    opacity
                }
            },
            shadowStyle: {
                name: "阴影样式",
                type: "object",
                children: {
                    opacity
                }
            },
            triggerEmphasis: {
                name: "是否强调系列",
                type: "boolean",
            },
            triggerTooltip: {
                name: "是否触发提示框",
                type: "boolean",
            }
        }
    },
}

export const xAxis: ObjectOption = {
    name: "X坐标轴",
    type: "object",
    children
}

export const yAxis: ObjectOption = {
    name: "Y坐标轴",
    type: "object",
    children
}