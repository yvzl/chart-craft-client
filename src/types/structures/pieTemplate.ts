import type {ICommonTemplate} from "@/types";

export interface IPieDataItem {
    name: string;
    value: number;
}

export interface IPieTemplate extends ICommonTemplate {
    seriesData: IPieDataItem[];
}