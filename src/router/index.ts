import {storeToRefs} from "pinia";
import {userStore} from "@/stores"
import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router"

const routes: RouteRecordRaw[] = [{
    path: "/",
    redirect: {
        name: "Home",
    },
}, {
    path: "/authentication",
    name: "Authentication",
    component: () => import("@/views/Authentication.vue")
}, {
    path: "/home",
    name: "Home",
    meta: {
        requiresAuth: true
    },
    component: () => import("@/views/Home.vue")
}, {
    path: "/edit/:id",
    name: "Edit",
    meta: {
        requiresAuth: true
    },
    component: () => import("@/views/Edit.vue")
},{
    path: "/create",
    name: "Create",
    meta: {
        requiresAuth: true
    },
    component: () => import("@/views/Edit.vue")
}, {
    path: "/user",
    name: "User",
    meta: {
        requiresAuth: true
    },
    component: () => import("@/views/User.vue")
}, {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/NotFound.vue")
}]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach((to, _, next) => {
    const {userState} = storeToRefs(userStore())
    if (to.name === "Authentication") {
        userState.value ? next({name: "Home"}) : next()
        return;
    }
    if (to.meta.requiresAuth) {
        !userState.value ? next({name: "Authentication"}) : next()
        return;
    }
    next()
})

export default router