import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "openbridge-web-components";
import "openbridge-css/dist/css/openbridge.css";
createApp(App).use(router).mount("#app");
