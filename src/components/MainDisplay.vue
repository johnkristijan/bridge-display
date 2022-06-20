<template>
  <div class="main-site">
    <Toolbar />
    <Sidebar />
  </div>
</template>

<script lang="ts">
import { Toolbar } from "./custom_components/toolbar/";
import { Sidebar } from "./custom_components/sidebar/";
export default {
  name: "MainDisplay",
  components: {
    Toolbar,
    Sidebar,
  },
};
</script>

<style lang="scss">
.main-site {
  border: 1px solid red;
  position: relative;
  min-width: 1920px;
  min-height: 1080px;
  height: 100%;
  width: 100%;
}
</style>
