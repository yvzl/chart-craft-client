import {line} from "@/configs/charts/structures/options"
import {commonOption} from "@/configs/charts/structures"
import type {ChartOption} from "@/types";

export const lineOption: ChartOption = {
    ...commonOption,
    series: line
}