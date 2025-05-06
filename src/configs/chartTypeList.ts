import type {IChartType} from "@/types";
import pieImg from "@/assets/images/chart_types/pie.png"
import barImg from "@/assets/images/chart_types/bar.png"
import lineImg from "@/assets/images/chart_types/line.png"

export const chartTypeList: IChartType[] = [{
    id: "1",
    name: "饼图",
    cover: pieImg
}, {
    id: "2",
    name: "柱形图",
    cover: barImg
}, {
    id: "3",
    name: "折线图",
    cover: lineImg
}]