import { createApp } from "vue";
import App from "./App.vue";
import { plugin, defaultConfig } from "@formkit/vue";
import router from "./routers";
import store from './store'

createApp(App).use(store).use(router).use(plugin, defaultConfig).mount("#app");