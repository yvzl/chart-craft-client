import type {EventMap} from "@/types";

export const mapEvent = (data: {
    id: string,
    eventName: string
}[], map: EventMap) => data.reduce((acc: EventMap, item) => {
    const {id, eventName} = item
    const result = map[id]
    result && (acc[eventName] = result);
    return acc
}, {})