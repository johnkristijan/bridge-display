<template>
  <div id="maindisplay">
    <LeftColumn />
    <div class="boat-container"></div>
    <div class="right-container"></div>
  </div>
</template>

<script>
import "openbridge-web-components";
import "openbridge-css/dist/css/openbridge.css";
import LeftColumn from "./maincontainer_columns/LeftColumn.vue";
// import SidebarContainer from "./SidebarContainer.vue";
export default {
  components: {
    LeftColumn,
    // SidebarContainer,
  },
};
</script>

<style>
#maindisplay {
  min-height: 800px;
  width: 100%;
  border: 1px solid red;
  display: grid;
  column-gap: 3px;
  grid-template-columns: 1fr 1fr 1fr;
}
/* .boat-container {
  border: 1px solid blue;
}
.right-container {
  border: 1px solid gold;
} */
</style>
