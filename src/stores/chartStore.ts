import {defineStore} from "pinia";
import {ref, computed} from "vue"
import {IChart, IChartTemplate, EntityMap} from "@/types"
import {barTemplate, chartToggleMap} from "@/configs"
import type {EChartsType, EChartsOption} from "echarts"

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

    const chartBox = ref<EChartsType | null>(null);

    const toggleChart = computed<EChartsOption>(() => {
        const id = selectChart.value;
        if(!id) return {}
        return chartToggleMap[chartMessage.value[id].typeId](chartData.value[id])
    })

    return {
        chartMessage,
        chartData,
        selectChart,
        chartBox,
        toggleChart
    }
})