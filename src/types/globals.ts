export type Fn = (...args: any[]) => void;
interface HasId {
    id: string
}
export type EntityMap<T extends HasId> = Record<T["id"], T>
export type FnMap<T extends HasId> = Record<T["id"], Fn>