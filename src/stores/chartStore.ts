import {defineStore} from "pinia";
import {ref} from "vue"
import {IChart, IChartTemplate, EntityMap} from "@/types"
import {barTemplate} from "@/configs"

export const chartStore = defineStore("chartStore", () => {
    const chartMessage = ref<EntityMap<IChart>>({
        1: {
            id: "1",
            name: "图表1",
            cover: "",
            date: '2025-04-16 10:37:24',
            typeId: "2",
        }
    })

    const chartData = ref<Record<IChart["id"], IChartTemplate>>({
        1: barTemplate,
    })

    const selectChart = ref<IChart["id"] | null>("1")

    return {
        chartMessage,
        chartData,
        selectChart
    }
})