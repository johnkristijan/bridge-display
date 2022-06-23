<template>
  <div class="main-site">
    <Toolbar @toggleSidebar="toggleSidebar" />
    <Sidebar v-if="openSidebar" :selectedScenesConfig="selectedScenesConfig" />
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
            option: "Mlink",
            iframesOptions: {},
          },
          {
            iframeUrl: "http://localhost:9000",
            option: "Mlink",
            iframesOptions: {},
          },
          {
            iframeUrl: "http://localhost:9000",
            option: "Mlink",
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
