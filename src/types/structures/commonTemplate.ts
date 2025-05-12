import type {EChartsOption} from "echarts"

export interface ICommonTemplate {
    option: EChartsOption
    xData: string[]
    yData: string[]
    colorData: string[]
}