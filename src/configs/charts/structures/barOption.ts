import {bar} from "@/configs/charts/structures/options"
import {commonOption} from "@/configs/charts/structures"
import type {ChartOptionMap} from "@/types";

export const barOption: ChartOptionMap = {
    ...commonOption,
    series: bar
}