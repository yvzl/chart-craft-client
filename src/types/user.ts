export enum GenderTypes {
    // "男",
    // "女"
}

export interface IUser {
    id: string
    name: string
    password: string
    email: string
    phone: number
    gender: GenderTypes
    avatar: string
    introduce: string
}