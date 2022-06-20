<template>
  <div class="sidepanel-container">
    <div v-for="listitem in listitems" :key="listitem"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      listitems: [],
    };
  },
});
</script>

<style lang="scss">
.sidepanel-container {
  /* Navigation menu */

  position: absolute;
  width: 320px;
  left: 0px;
  top: 48px;
  bottom: 0px;
}
</style>
