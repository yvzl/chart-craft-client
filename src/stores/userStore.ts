import {defineStore} from "pinia";
import {computed, ref} from "vue"
import {EntityMap, IUser} from "@/types"

export const userStore = defineStore("userStore", () => {
    const userList = ref<EntityMap<IUser>>({
        1: {
            id: "1",
            name: "张三",
            password: "123456",
            email: "898101408@qq.com",
            phone: 18819327181,
            gender: "0",
            avatar: "/src/assets/images/default.jpg",
            introduce: "11111",
        },
        2: {
            id: "2",
            name: "李四",
            password: "123456",
            email: "2911508353@qq.com",
            phone: 19700363238,
            gender: "1",
            avatar: "/src/assets/images/default.jpg",
            introduce: "2222",
        }
    })

    const userState = ref<IUser["id"] | null>("1")

    const user = computed<IUser | null>(() => {
        if (!userState.value) return null
        const id = userState.value
        return userList.value[id]
    })

    const changeState = (val: typeof userState.value) => userState.value = val

    const changeData = <T extends keyof Omit<IUser, "id">>(id: typeof userState.value, key: T, value: IUser[T]) => {
        if (!id || !userList.value[id]) return
        userList.value[id][key] = value
    }

    return {
        userList,
        userState,
        changeState,
        user,
        changeData
    }
})