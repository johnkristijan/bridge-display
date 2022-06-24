<template>
  <div class="main-site">
    <Toolbar @toggleSidebar="toggleSidebar" @toggleMultiple="toggleMultiple" />
    <Sidebar
      v-if="openSidebar"
      :selectedScenesConfig="selectedScenesConfig"
      @selectScene="selectScene"
    />
    <Scene
      :openSidebar="openSidebar"
      :selectedScenesConfig="selectedScenesConfig"
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
      selectedScenesConfig: {
        type: "multiple",
        multipleSceneList: [
          {
            iframeUrl: "http://localhost:9000",
            option: "Monitor",
            iframesOptions: {},
          },
          {
            iframeUrl: "http://localhost:9000",
            option: "Conning",
            iframesOptions: {},
          },
          {
            iframeUrl: "http://localhost:9000",
            option: "Analytics",
            iframesOptions: {},
          },
          {
            iframeUrl: "http://fuelsaver.demo.mlink.no/#/",
            option: "Fuelsaver",
            iframesOptions: {},
          },
        ],
        singleScene: {
          iframeUrl: "http://fuelsaver.demo.mlink.no/#/",
          option: "Fuelsaver",
          iframesOptions: "",
        },
      },
    };
  },
  methods: {
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
      };
      switch (scene.scene.label.toUpperCase()) {
        case "RADAR":
          decidedScene = {
            iframeUrl: "",
            option: "Radar",
            iframesOptions: {},
          };
          break;
        case "ECDIS":
          decidedScene = {
            iframeUrl: "",
            option: "ECDIS",
            iframesOptions: {},
          };
          break;
        case "CONNING":
          decidedScene = {
            iframeUrl: "",
            option: "Conning",
            iframesOptions: {},
          };
          break;
        case "FUELSAVER":
          decidedScene = {
            iframeUrl: "http://fuelsaver.demo.mlink.no/#/",
            option: "Fuelsaver",
            iframesOptions: {},
          };
          break;
        case "MONITOR":
          decidedScene = {
            iframeUrl: "http://localhost:9000",
            option: "Monitor",
            iframesOptions: {},
          };
          break;

        case "ANALYTICS":
          decidedScene = {
            iframeUrl: "http://localhost:9000",
            option: "Analytics",
            iframesOptions: {},
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
  // border: 1px solid red;
  position: relative;
  min-width: 1920px;
  min-height: 1040px;
  height: 100vh;
  width: 100vw;
}
</style>
