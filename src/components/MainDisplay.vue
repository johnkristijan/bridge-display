<template>
  <ToolbarComp />
  <!-- <h1>Main<small>Component</small></h1> -->
</template>

<script lang="ts">
import ToolbarComp from "./custom_components/toolbar/ToolbarComp.vue";
export default {
  name: "MainDisplay",
  components: {
    ToolbarComp,
  },
};
</script>

<style lang="scss">
h1 {
  color: red;
  small {
    color: blue;
  }
}
</style>
