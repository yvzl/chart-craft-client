import {ref, watch, type Ref, type DefineProps, type EmitFn} from "vue"

export const useModel = <T>(value: T, props: DefineProps<{[key: string]: any}, never>, propsName: string, emits: EmitFn<string, any>, emitsName: string): Ref<T> => {
    let state = true
    const data = ref<T>(value) as Ref<T>
    watch(() => props[propsName], newVal => {
        state && (data.value = newVal)
    }, {deep: true})
    watch(data, newVal => {
        state = false
        emits(emitsName, newVal)
        state = true
    }, {deep: true})
    return data
}