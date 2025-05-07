import {chartOption} from "@/types";
import {labelConfigs, labelConfigs2, lineStyleConfigs, opacityConfigs} from "@/configs";

export const lineConfigs: chartOption = {
    symbol: {
        name: "标记",
        type: "map",
        data: {
            circle: "圆形",
            rect: "矩形",
            roundRect: "圆角矩形",
            triangle: "三角形",
            diamond: "菱形",
            pin: "图钉",
            arrow: "箭头",
            none: "无标记"
        },
    },
    showSymbol: {
      name: "是否显示标记",
      type: "boolean"
    },
    symbolSize: {
        name: "标记大小",
        type: "number",
        min: 1,
        max: 50,
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
        name: "标签样式",
        type: "object",
        children: {
            ...labelConfigs,
            ...labelConfigs2,
        }
    },
    lineStyle: {
        name: "线条样式",
        type: "object",
        children: {
            ...lineStyleConfigs
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
                    auto: "轴线到数据",
                    start: "轴底部到数据",
                    end: "轴顶部到数据"
                }
            },
            ...opacityConfigs,
        }
    },
}