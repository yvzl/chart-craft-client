import {EntityMap} from "@/types";

export interface IColorItem {
    id: string
    value: string
}

export interface IColor {
    id: string
    bgColor: string
    itemColor: IColorItem[]
}

export type ColorMap = EntityMap<IColor>