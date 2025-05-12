import {barOption, pieOption, lineOption} from "@/configs"
import {ChartOption, IChartType, IBarTemplate, IPieTemplate, ILineTemplate} from "@/types";
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

export const chartTypeMap: Record<IChartType["id"], ChartOption> = {
    1: barOption,
    2: pieOption,
    3: lineOption,
}

export const chartToggleMap: Record<IChartType["id"], (data: any) => EChartsOption> = {
    1(_: IPieTemplate): EChartsOption {
        return {}
    },
    2({seriesData, xData, option, yData, colorData}: IBarTemplate): EChartsOption {
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
        }))
    },
    3(_: ILineTemplate): EChartsOption {
        return {}
    }
}