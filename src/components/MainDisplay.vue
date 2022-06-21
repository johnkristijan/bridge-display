<template>
  <div class="main-site">
    <Toolbar />
    <Sidebar />
    <Scene />
  </div>
</template>

<script lang="ts">
import { Toolbar } from "./custom_components/toolbar/";
import { Sidebar } from "./custom_components/sidebar/";
import { Scene } from "./custom_components/scene/";
export default {
  name: "MainDisplay",
  components: {
    Scene,
    Sidebar,
    Toolbar,
  },
};
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
