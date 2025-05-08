import type {ObjectOption} from "@/types";
import {
    show,
    left,
    right,
    top,
    bottom,
    opacity,
    fontSize,
    fontFamily,
    fontWeight,
    fontStyle,
    color
} from "@/configs/charts/structures/subs";

export const legend: ObjectOption = {
    name: "图例",
    type: "object",
    children: {
        type: {
            name: "类型",
            type: "map",
            data: {
                plain: "普通图例",
                scroll: "滚动图例"
            }
        },
        show,
        left,
        right,
        top,
        bottom,
        orient: {
            name: "排列",
            type: "map",
            data: {
                horizontal: "水平排列",
                vertical: "垂直排列"
            }
        },
        align: {
            name: "文本对齐方式",
            type: "map",
            data: {
                auto: "自动",
                left: "左侧",
                right: "右侧"
            }
        },
        itemGap: {
            name: "间隔",
            type: "number",
            min: 1,
            max: 100,
        },
        itemWidth: {
            name: "宽度",
            type: "number",
            min: 1,
            max: 100,
        },
        itemHeight: {
            name: "高度",
            type: "number",
            min: 1,
            max: 100,
        },
        itemStyle: {
            name: "样式",
            type: "object",
            children: {
                opacity
            }
        },
        symbolRotate: {
            name: "旋转角度",
            type: "number",
            min: 0,
            max: 360
        },
        selectedMode: {
            name: "选择模式",
            type: "boolean",
        },
        textStyle: {
            name: "文本样式",
            type: "object",
            children: {
                color,
                fontStyle,
                fontWeight,
                fontFamily,
                fontSize
            }
        },
        icon: {
            name: "图例图标",
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
    }
}