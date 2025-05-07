import {chartOption} from "@/types";

export const labelConfigs: chartOption = {
    show: {
        name: "是否显示",
        type: "boolean",
    },
    rotate: {
        name: "旋转角度",
        type: "number",
        min: -90,
        max: 90
    },
    fontStyle: {
        name: "字体风格",
        type: "map",
        data: {
            normal: "默认",
            italic: "斜体"
        }
    },
    fontFamily: {
        name: "字体系列",
        type: "map",
        data: {
            "sans-serif": "sans-serif",
            serif: "serif",
            monospace: "monospace",
            Arial: "Arial",
            "Courier New": "Courier New",
        }
    },
    fontWeight: {
        name: "字体粗细",
        type: "number",
        min: 100,
        max: 1000
    },
    fontSize: {
        name: "字体大小",
        type: "number",
        min: 12,
        max: 36
    }
}