import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "openbridge-web-components";
import "openbridge-css/dist/css/openbridge.css";

// Fontawesome setup
import {
  faBars,
  faAnchor,
  faBell,
  faUser,
  faMoon,
  faSun,
  faBorderAll,
  faPlusCircle,
  faTriangleExclamation,
  faGear,
  faQuestionCircle,
  faAngleRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faBars,
  faAnchor,
  faBell,
  faUser,
  faMoon,
  faSun,
  faBorderAll,
  faPlusCircle,
  faTriangleExclamation,
  faGear,
  faQuestionCircle,
  faAngleRight,
  faAngleDown
);
// End Fontawesome setup
createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
