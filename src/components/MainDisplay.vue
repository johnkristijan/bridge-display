<template>
  <div class="main-site">
    <Toolbar
      @toggleSidebar="toggleSidebar"
      @toggleMultiple="toggleMultiple"
      @toggleDarkmode="toggleDarkmode"
      :darkMode="darkMode"
    />
    <Sidebar
      v-if="openSidebar"
      :selectedScenesConfig="selectedScenesConfig"
      @selectScene="selectScene"
      :darkMode="darkMode"
    />
    <Scene
      :openSidebar="openSidebar"
      :selectedScenesConfig="selectedScenesConfig"
      :darkMode="darkMode"
    />
  </div>
</template>

<script lang="ts">
import { Toolbar } from "./custom_components/toolbar/";
import { Sidebar } from "./custom_components/sidebar/";
import { Scene } from "./custom_components/scene/";
import { defineComponent } from "vue";
import { MainDisplayData } from "./MainDisplayInterfaces";
import { SceneI } from "./custom_components/scene/SceneInterfaces";
import { SidebarElementSceneSelectI } from "./custom_components/sidebar/SidebarInterfaces";

export default defineComponent({
  name: "MainDisplay",
  components: {
    Scene,
    Sidebar,
    Toolbar,
  },
  data(): MainDisplayData {
    return {
      openSidebar: true,
      darkMode: false,
      selectedScenesConfig: {
        type: "multiple",
        multipleSceneList: [
          {
            iframeUrl: "http://localhost:9000/#/openbridgedashboard",
            option: "Monitor",
            iframesOptions: {},
            isIframe: true,
          },
          {
            iframeUrl: "https://192.168.1.240",
            option: "IAS",
            iframesOptions: {},
            isIframe: true,
          },
          {
            iframeUrl: "http://localhost:9000/#/openbridgemap",
            option: "Analytics",
            iframesOptions: {},
            isIframe: true,
          },
          {
            iframeUrl: "http://fuelsaver.demo.mlink.no/#/",
            option: "Fuelsaver",
            iframesOptions: {},
            isIframe: true,
          },
        ],
        singleScene: {
          iframeUrl: "http://fuelsaver.demo.mlink.no/#/",
          option: "Fuelsaver",
          iframesOptions: "",
          isIframe: true,
        },
      },
    };
  },
  methods: {
    toggleDarkmode() {
      console.log("halla");
      this.darkMode = !this.darkMode;
      const body = document.getElementsByTagName("body");
      if (this.darkMode) {
        console.log(body[0]);
        body[0].style.setProperty("background-color", "#404040");
      } else {
        body[0].style.setProperty("background-color", "#efefef");
        console.log(body[0]);
      }
    },
    toggleSidebar() {
      this.openSidebar = !this.openSidebar;
    },
    toggleMultiple() {
      this.selectedScenesConfig.type =
        this.selectedScenesConfig.type === "multiple" ? "single" : "multiple";
    },
    selectScene(elem: any) {
      if (elem.multiple) {
        let tempMultiple: SceneI[] =
          this.selectedScenesConfig.multipleSceneList;
        const alreadyExist = tempMultiple.findIndex(
          (sceneElem) => sceneElem.option === elem.scene.label
        );
        // Finnes allerede og bytter plass
        if (alreadyExist !== -1) {
          const tempScene = tempMultiple[alreadyExist];
          const replacedScene = tempMultiple[elem.index];
          tempMultiple[alreadyExist] = replacedScene;
          tempMultiple[elem.index] = tempScene;
          this.selectedScenesConfig.multipleSceneList = tempMultiple;
          this.selectedScenesConfig.type = "multiple";
          return;
        }
        const decidedScene = this.sceneDecider(elem);
        tempMultiple[elem.index] = decidedScene;
        this.selectedScenesConfig.multipleSceneList = tempMultiple;
        this.selectedScenesConfig.type = "multiple";
      } else {
        const decidedScene = this.sceneDecider(elem);
        this.selectedScenesConfig.singleScene = decidedScene;
        this.selectedScenesConfig.type = "single";
      }
    },
    sceneDecider(scene: SidebarElementSceneSelectI): SceneI {
      let decidedScene: SceneI = {
        iframeUrl: "",
        option: "",
        isIframe: false,
      };
      switch (scene.scene.label.toUpperCase()) {
        case "RADAR":
          decidedScene = {
            iframeUrl: "",
            option: "Radar",
            iframesOptions: {},
            isIframe: false,
          };
          break;
        case "IAS":
          decidedScene = {
            iframeUrl: "http://192.168.1.221/webvisu/webvisu.htm",
            option: "IAS",
            iframesOptions: {},
            isIframe: false,
          };
          break;
        case "ECDIS":
          decidedScene = {
            iframeUrl: "",
            option: "ECDIS",
            iframesOptions: {},
            isIframe: false,
          };
          break;
        case "CONNING":
          decidedScene = {
            iframeUrl: "",
            option: "Conning",
            iframesOptions: {},
            isIframe: false,
          };
          break;
        case "FUELSAVER":
          decidedScene = {
            iframeUrl: "http://fuelsaver.demo.mlink.no/#/",
            option: "Fuelsaver",
            iframesOptions: {},
            isIframe: true,
          };
          break;
        case "MONITOR":
          decidedScene = {
            iframeUrl: "http://localhost:9000/#/openbridgedashboard",
            option: "Monitor",
            iframesOptions: {},
            isIframe: true,
          };
          break;

        case "ANALYTICS":
          decidedScene = {
            iframeUrl: "http://localhost:9000/#/openbridgemap",
            option: "Analytics",
            iframesOptions: {},
            isIframe: true,
          };
          break;
        default:
          break;
      }
      return decidedScene;
    },
  },
});
</script>

<style lang="scss">
.main-site {
  position: relative;
  min-width: 1920px;
  min-height: 1040px;
  height: 100vh;
  width: 100vw;
}
</style>
