import {createApp} from 'vue'
import {createPinia} from "pinia";
import App from "@/App.vue";
import router from "@/router";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import "@icon-park/vue-next/styles/index.css";
import "default-passive-events";
import "@/assets/styles/index.scss";

const pinia = createPinia()
const app = createApp(App)

pinia.use(piniaPluginPersistedstate)
app.use(pinia).use(router)
app.mount('#app')