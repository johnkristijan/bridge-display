<template>
  <div class="sidepanel-container">
    <div class="sidebar-element-list">
      <SidebarElement
        v-for="listitem in listitems"
        :key="listitem.label"
        :SidebarElemProp="listitem"
      />
    </div>
    <div class="sidebar-footer">
      <SidebarFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import SidebarElement from "./SidebarElement.vue";
import SidebarFooter from "./SidebarFooter.vue";
import { SidebarElementI } from "./SidebarInterfaces";
export default defineComponent({
  data() {
    return {
      listitems: [
        {
          label: "ECDIS",
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
          label: "FuelSaver",
          open: false,
        },
        {
          label: "Monitor",
          open: false,
        },
      ] as SidebarElementI[],
    };
  },
  components: {
    SidebarElement,
    SidebarFooter,
  },
});
</script>

<style lang="scss">
.sidepanel-container {
  /* Navigation menu */
  position: absolute;
  width: 18vw;
  min-width: 340px;
  left: 0px;
  top: 48px;
  bottom: 0px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.3);
  border-radius: 0px 0px 2px 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // border: 2px dashed darkblue;
  /* Item List */
  .sidebar-element-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 320px;
    height: 384px;
    left: 0px;
    top: 0px;
  }
}
</style>
