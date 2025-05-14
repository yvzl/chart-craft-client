import {createApp, h, type App} from 'vue'
import MessageComponent from '@/components/Common/Message.vue'
import {IMessage, MessageType, MessageValue} from '@/types'

export const useMessage = (type: MessageType, value: MessageValue, option?: Partial<Omit<IMessage, 'type' | 'value'>>) => {
    let container = document.createElement('div')
    let app: App<Element> | null

    Object.assign(container.style, {
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '100'
    })

    document.body.appendChild(container)

    app = createApp({
        render() {
            return h(MessageComponent, {
                value,
                type,
                ...option,
                onClose() {
                    app?.unmount()
                    container.remove()
                }
            })
        }
    })

    app.mount(container)
}