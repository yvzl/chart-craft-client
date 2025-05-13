import {line} from "@/configs/charts/structures/options"
import {commonOption} from "@/configs/charts/structures"
import type {ChartOptionMap} from "@/types";

export const lineOption: ChartOptionMap = {
    ...commonOption,
    series: line
}