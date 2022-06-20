import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faAnchor,
  faBell,
  faUser,
  faMoon,
  faSun,
  faBorderAll,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "openbridge-web-components";
import "openbridge-css/dist/css/openbridge.css";

// Fontawesome setup
library.add(faBars, faAnchor, faBell, faUser, faMoon, faSun, faBorderAll);
createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
