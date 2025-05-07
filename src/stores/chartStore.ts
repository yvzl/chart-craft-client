import {defineStore} from "pinia";
import {ref} from "vue"
import {type IChart} from "@/types"
import type {EChartsOption} from "echarts"

export const chartStore = defineStore("chartStore", () => {
    const chartMessage = ref<IChart[]>([{
        id: "1",
        name: "图表1",
        cover: "",
        date: '2025-04-16 10:37:24',
    }, {
        id: "2",
        name: "图表2",
        cover: "",
        date: '2025-04-16 10:37:24',
    }])

    const chartData = ref<Record<string, EChartsOption>>({
        "1": {

        },
        "2": {

        }
    })

    return {
        chartMessage,
        chartData
    }
})