export type NumberOption = {
    name: string
    type: "number",
    min: number,
    max: number
}

export type StringOption = {
    name: string
    type: "string",
}

export type BooleanOption = {
    name: string
    type: "boolean",
}

export type MapOption = {
    name: string
    type: "map",
    data: Record<string, string>
}

export type ObjectOption = {
    name: string,
    type: "object",
    children: chartOption
}

export type chartOption = Record<string, NumberOption | StringOption | BooleanOption | MapOption | ObjectOption>