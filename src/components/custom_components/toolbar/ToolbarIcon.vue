<template>
  <div class="toolbar-icon-container" :class="darkMode ? 'darkmodeticon' : ''">
    <font-awesome-icon :icon="toolbarIconProps.iconsrc" size="3x" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { ToolbarIconI } from "./ToolbarInterface";

export default defineComponent({
  name: "ToolbarIcon",
  props: {
    toolbarIconProps: {
      type: Object as PropType<ToolbarIconI>,
      required: true,
    },
    darkMode: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.toolbar-icon-container {
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.2);
  }
}
.darkmodeticon {
  cursor: pointer;
  color: #33bbff;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.2);
  }
}
</style>
