import {bar} from "@/configs/charts/structures/options"
import {commonOption} from "@/configs/charts/structures"
import type {ChartOption} from "@/types";

export const barOption: ChartOption = {
    ...commonOption,
    series: bar
}