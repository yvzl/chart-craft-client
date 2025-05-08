import type {EChartsOption} from "echarts"

export type NumberOption = {
    name: string
    type: "number",
    min: number,
    max: number
}

export type StringOption = {
    name: string
    type: "string",
}

export type ColorOption = {
    name: string
    type: "color",
}

export type BooleanOption = {
    name: string
    type: "boolean",
}

export type MapOption = {
    name: string
    type: "map",
    data: Record<string, string>
}

export type ObjectOption = {
    name: string,
    type: "object",
    children: ChartOption
}

export type ChartOption = Partial<Record<keyof EChartsOption, NumberOption | StringOption | BooleanOption | MapOption | ColorOption | ObjectOption>>