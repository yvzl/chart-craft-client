import {computed, type Ref} from 'vue'
import type {DefineProps, EmitFn} from 'vue'

export const useModel = <T>(
    props: DefineProps<{ [key: string]: any }, never>,
    propsName: string,
    emits: EmitFn<string, any>,
    emitsName: string
): Ref<T> => computed({
    get: () => props[propsName],
    set: (val: T) => emits(emitsName, val)
})