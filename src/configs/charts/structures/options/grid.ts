import type {ObjectOption} from "@/types";
import {
    show,
    left,
    right,
    top,
    bottom
} from "@/configs/charts/structures/subs";

export const grid: ObjectOption = {
    name: "坐标系网格",
    type: "object",
    children: {
        show,
        left,
        right,
        top,
        bottom,
        width: {
            name: "宽度",
            type: "string",
        },
        height: {
            name: "高度",
            type: "string",
        },
    }
}