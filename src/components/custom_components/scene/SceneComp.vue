<template>
  <!-- <iframe
      src="https://dev.m-link.no"
      class="iframe-scene-multiple"
    ></iframe> -->
  <!-- <div class="scene-container-multiple" :class="openSidebar && 'open-sidebar'"> -->
  <div class="scene-container-multiple" :class="openSidebar && 'open-sidebar'">
    <div
      v-for="(scene, i) in selectedScenesConfig.multipleSceneList"
      class="subscene-container subscene-2"
      :key="`${i}-scene-multiple`"
      :id="`subscene-${i}`"
    >
      <iframe :src="scene.iframeUrl" class="iframe-scene-multiple"></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ScenesConfigI } from "../scene/SceneInterfaces";
export default defineComponent({
  name: "SceneComponent",
  props: {
    openSidebar: {
      type: Boolean,
      required: true,
    },
    selectedScenesConfig: Object as PropType<ScenesConfigI>,
  },
  data() {
    return {
      sceneFrames: [],
      multipleScreens: false,
    };
  },
});
</script>

<style lang="scss">
.scene-container-multiple {
  // border: 1px solid hotpink;
  /* Size and position */
  top: 3.5vh;
  right: 0;
  height: calc(100% - 48px);
  width: 100vw;
  transition: all 0.5s;
  padding: 1vh 1vw;
  min-width: 1580px;
  position: absolute;
  &.open-sidebar {
    width: calc(100vw - 18vw);
  }
  /* end Size and position */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  // border: 1px solid hotpink;

  .subscene-container {
    border: 5px dashed rgb(155, 155, 155);
    border-radius: 5px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    display: flex;
    .iframe-scene-multiple {
      border-radius: 5px;
      flex-grow: 1;
      margin: 0;
      border: 0;
      padding: 0;
    }
  }
}
</style>
