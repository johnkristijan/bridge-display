<template>
  <div class="sidepanel-container" :class="darkMode ? 'darkmode' : ''">
    <div class="sidebar-element-list">
      <SidebarElement
        v-for="listitem in listitems"
        :key="listitem.label"
        :SidebarElemProp="listitem"
        :selectedScenesConfig="selectedScenesConfig"
        @selectScene="selectScene"
        @openSidebarElem="openSidebarElem"
        :darkMode="darkMode"
      />
    </div>
    <div class="sidebar-footer">
      <SidebarFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import SidebarElement from "./SidebarElement.vue";
import SidebarFooter from "./SidebarFooter.vue";
import { SidebarElementI } from "./SidebarInterfaces";
import { ScenesConfigI } from "../scene/SceneInterfaces";
export default defineComponent({
  props: {
    selectedScenesConfig: {
      type: Object as PropType<ScenesConfigI>,
      required: true,
    },
    darkMode: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      listitems: [
        {
          label: "ECDIS",
          open: false,
        },
        {
          label: "IAS",
          open: false,
        },

        {
          label: "Radar",
          open: false,
        },
        {
          label: "Conning",
          open: false,
        },
        {
          label: "Fuelsaver",
          open: false,
        },
        {
          label: "Monitor",
          open: false,
        },
        {
          label: "Analytics",
          open: false,
        },
      ] as SidebarElementI[],
    };
  },
  components: {
    SidebarElement,
    SidebarFooter,
  },
  methods: {
    selectScene(elem: any) {
      this.$emit("selectScene", elem);
    },
    openSidebarElem(sidebarElem: SidebarElementI) {
      this.listitems.forEach((elem) => {
        elem.open = false;
      });
      const index = this.listitems.findIndex(
        (elem) => elem.label === sidebarElem.label
      );
      this.listitems[index].open = !sidebarElem.open;
    },
  },
});
</script>

<style lang="scss" scoped>
.sidepanel-container {
  position: absolute;
  width: calc(100vw - 82vw);
  min-width: 340px;
  left: 0px;
  top: 3.5vh;
  bottom: 0px;
  transition: all 0.5s;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.3);
  border-radius: 0px 0px 2px 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .sidebar-element-list {
    margin-top: 1vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
    left: 0px;
    top: 0px;
  }
}
.darkmode {
  background-color: #333333 !important;
  color: #33bbff !important;
  position: absolute;
  width: calc(100vw - 82vw);
  min-width: 340px;
  left: 0px;
  top: 3.5vh;
  bottom: 0px;
  transition: all 0.5s;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.3);
  border-radius: 0px 0px 2px 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .sidebar-element-list {
    margin-top: 1vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
    left: 0px;
    top: 0px;
  }
  .sidebar-footer-container {
    background-color: #333333 !important;
    color: #33bbff !important;
  }
}
</style>
