<template>
  <div
    id="conningdisplay"
    :class="
      selectedScenesConfig.type === 'multiple' &&
      'multiple-scenes-conningdisplay'
    "
  >
    <LeftColumn :selectedScenesConfig="selectedScenesConfig" />
    <MidColumn :selectedScenesConfig="selectedScenesConfig" />
    <RightColumn :selectedScenesConfig="selectedScenesConfig" />
  </div>
</template>

<script lang="ts">
import "openbridge-web-components";
import "openbridge-css/dist/css/openbridge.css";
import LeftColumn from "./conning_columns/LeftColumn.vue";
import MidColumn from "./conning_columns/MidColumn.vue";
import RightColumn from "./conning_columns/RightColumn.vue";
import { defineComponent, PropType } from "@vue/runtime-core";
import { ScenesConfigI } from "../custom_components/scene/SceneInterfaces";
export default defineComponent({
  name: "ConningComponent",
  props: {
    selectedScenesConfig: {
      type: Object as PropType<ScenesConfigI>,
      required: true,
    },
  },
  components: {
    LeftColumn,
    MidColumn,
    RightColumn,
  },
});
</script>

<style lang="scss">
#conningdisplay {
  flex: 1;
  height: 100%;
  width: 100%;
  display: grid;
  column-gap: 1px;
  grid-template-columns: 1fr 1fr 1fr;
  flex: 1;
  background-color: #333333;
  &.multiple-scenes-conningdisplay {
    // max-width: 39vw;
    max-height: 44.9vh;
  }
}
</style>
