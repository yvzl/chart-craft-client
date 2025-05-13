import {pie} from "@/configs/charts/structures/options"
import {commonOption} from "@/configs/charts/structures"
import type {ChartOptionMap} from "@/types";

export const pieOption: ChartOptionMap = {
    ...commonOption,
    series: pie
}