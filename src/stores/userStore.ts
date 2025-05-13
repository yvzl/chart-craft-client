import {defineStore} from "pinia";
import {ref} from "vue"
import type {IUser} from "@/types"

export const userStore = defineStore("userStore", () => {
    const userList = ref<IUser[]>([{
        id: "1",
        name: "张三",
        password: "123456",
        email: "898101408@qq.com",
        phone: 18819327181,
        gender: 0,
        avatar: "",
        introduce: "",
    }, {
        id: "2",
        name: "李四",
        password: "123456",
        email: "2911508353@qq.com",
        phone: 19700363238,
        gender: 0,
        avatar: "",
        introduce: "",
    }])

    const userState = ref<IUser["id"] | null>("1")

    const changeState = (val: typeof userState.value) => userState.value = val

    return {
        userList,
        userState,
        changeState
    }
})