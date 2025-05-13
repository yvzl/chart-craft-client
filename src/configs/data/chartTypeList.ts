import {barOption, pieOption, lineOption} from "@/configs"
import {ChartOptionMap, IChartType, IBarTemplate, IPieTemplate, ILineTemplate, IMaxDimension} from "@/types";
import pieImg from "@/assets/images/chart_types/pie.png"
import barImg from "@/assets/images/chart_types/bar.png"
import lineImg from "@/assets/images/chart_types/line.png"
import type {BarSeriesOption, EChartsOption} from "echarts";

export const chartTypeList: IChartType[] = [{
    id: "1",
    name: "饼图",
    cover: pieImg,
}, {
    id: "2",
    name: "柱形图",
    cover: barImg
}, {
    id: "3",
    name: "折线图",
    cover: lineImg
}]

export const chartTypeMap: Record<IChartType["id"], ChartOptionMap> = {
    1: barOption,
    2: pieOption,
    3: lineOption,
}

export const chartToggleMap: Record<IChartType["id"], (data: any) => EChartsOption> = {
    1(_: IPieTemplate): EChartsOption {
        return {}
    },
    2({seriesData, xData, option, yData, colorData, bgColor}: IBarTemplate): EChartsOption {
        return JSON.parse(JSON.stringify({
            ...option,
            color: colorData,
            series: seriesData.map((item, i) => ({
                name: yData[i],
                data: item,
                ...option.series as BarSeriesOption
            })),
            xAxis: {
                ...option.xAxis,
                data: xData
            },
            legend: {
                ...option.legend,
                data: yData
            },
            backgroundColor: bgColor
        }))
    },
    3(_: ILineTemplate): EChartsOption {
        return {}
    }
}

export const chartDataToggle: Record<IChartType["id"], (data: any) => number[][]> = {
    1(data: IPieTemplate["seriesData"]): number[][] {
        return [data.map(item => item.value)]
    },
    2(data: IBarTemplate["seriesData"]): number[][] {
        return data
    },
    3(data: ILineTemplate["seriesData"]): number[][] {
        return data
    }
}

export const chartMaxDimension: Record<IChartType["id"], IMaxDimension> = {
    1: {
        maxCols: 8,
        maxRows: 3
    },
    2: {
        maxCols: 8,
        maxRows: 8
    },
    3: {
        maxCols: 8,
        maxRows: 8
    }
}