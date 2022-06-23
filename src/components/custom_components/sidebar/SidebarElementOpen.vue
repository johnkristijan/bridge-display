<template>
  <div class="sidebar-element-open">
    <div class="sidebar-element-open-inner">
      <div class="sidebar-multiple-scenes">
        <div
          v-for="(scene, i) in selectedScenesConfig.multipleSceneList"
          :class="`sidebar-scene-${i} sidebar-scene`"
          :key="`${i}-sidebar-scene`"
        >
          {{ scene.option }}
        </div>
      </div>
      <div class="sidebar-single-scene">
        <div class="sidebar-single-scene-inner sidebar-scene"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { ScenesConfigI } from "../scene/SceneInterfaces";
export default defineComponent({
  props: {
    selectedScenesConfig: {
      type: Object as PropType<ScenesConfigI>,
      required: true,
    },
  },
  data() {
    return {};
  },
  created() {
    console.log(this.selectedScenesConfig);
  },
});
</script>

<style lang="scss">
.sidebar-element-open {
  height: 7.5vh;
  width: 100%;
  //   border: 1px solid red;
  .sidebar-element-open-inner {
    display: flex;
    flex-direction: row;
    height: 100%;
    .sidebar-multiple-scenes {
      padding: 0.2vh 0.2vw;
      width: 50%;
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      .sidebar-scene-0 {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
      }
      .sidebar-scene-1 {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
      }
      .sidebar-scene-2 {
        grid-row: 2 / 3;
        grid-column: 1 / 2;
      }
      .sidebar-scene-3 {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
      }
    }
    .sidebar-scene {
      border: 1px dashed rgb(155, 155, 155);
      border-radius: 5px;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 500;
    }
    .sidebar-single-scene {
      width: 50%;
      padding: 00.2vh 0.2vw;
      .sidebar-single-scene-inner {
        height: 100%;
      }
    }
  }
}
</style>
