export type MessageType = 'success' | 'error' | 'info'

export type MessageValue = string

export interface IMessage {
    type?: MessageType
    value?: MessageValue
    duration?: number
}