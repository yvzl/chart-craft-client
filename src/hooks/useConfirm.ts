import {type App, createApp, h, ref} from "vue"
import Confirm from "@/components/Common/Confirm.vue";

export const useConfirm = (value: string, onConfirm: () => void = () => {}, onCancel: () => void = () => {}) => {
    const timer = 350
    const state = ref(false)
    let container = document.createElement('div')
    let app: App<Element> | null

    document.body.appendChild(container)

    const closeModal = () => {
        app?.unmount()
        container.remove()
    }

    const cancelState = (...args: (() => void)[]) => {
        state.value = false
        setTimeout(() => args.forEach(item => item()), timer)
    }

    app = createApp({
        render() {
            return h(Confirm, {
                state: state.value,
                value,
                onConfirm: () => cancelState(onConfirm, closeModal),
                onCancel: () => cancelState(onCancel, closeModal),
                onMounted: () => state.value = true
            })
        }
    })

    app.mount(container)
}