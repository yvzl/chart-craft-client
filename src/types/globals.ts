export type Fn = (...args: any[]) => void;
export type EntityMap<T extends {id: string}> = Record<T["id"], T>