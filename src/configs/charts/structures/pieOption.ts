import {pie} from "@/configs/charts/structures/options"
import {commonOption} from "@/configs/charts/structures"
import type {ChartOption} from "@/types";

export const pieOption: ChartOption = {
    ...commonOption,
    series: pie
}