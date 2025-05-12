export interface IChartType {
    id: string
    name: string
    cover: string
}

export interface IChart extends IChartType {
    date: string
    typeId: IChartType["id"]
}