export interface IColorItem {
    id: string
    value: string
}

export interface IColor {
    id: string
    bgColor: string
    itemColor: Array<IColorItem>
}