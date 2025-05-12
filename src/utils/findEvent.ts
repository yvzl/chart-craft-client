import type {Fn} from "@/types";

interface IData {
    id: string,
    eventName: string
}

export const mapEvent = (data: IData[], map: Record<IData["id"], Fn>) => data.reduce((acc: typeof map, item) => {
    const {id, eventName} = item
    const result = map[id]
    result && (acc[eventName] = result);
    return acc
}, {})