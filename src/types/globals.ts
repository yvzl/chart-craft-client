export type Fn = (...args: any[]) => void;
export type StateMap = Record<string, boolean>
export type EventMap = Record<string, Fn>