<template>
  <div style="width: 100%">
    <div class="sidebar-list-elem-container">
      <div class="sidebar-elem-padding-div"></div>
      <div class="sidebar-icon-div">
        <font-awesome-icon icon="plus-circle" />
      </div>
      <div class="sidebar-elem-label-div">{{ SidebarElemProp.label }}</div>
    </div>
    <SidebarElementOpen
      v-if="openlort"
      :selectedScenesConfig="selectedScenesConfig"
    />
  </div>
</template>

<script lang="ts">
import { SidebarElementI } from "./SidebarInterfaces";
import { defineComponent, PropType } from "@vue/runtime-core";
import SidebarElementOpen from "./SidebarElementOpen.vue";

export default defineComponent({
  props: {
    SidebarElemProp: {
      type: Object as PropType<SidebarElementI>,
      required: true,
    },
    selectedScenesConfig: {
      type: Object as PropType<SidebarElementI>,
      required: true,
    },
  },
  components: {
    SidebarElementOpen,
  },
  data() {
    return {
      openlort: true,
    };
  },
});
</script>

<style lang="scss">
.sidebar-list-elem-container {
  // border: 1px solid green;
  position: relative;
  width: 100%;
  padding: 1.1vh 1vw;
  display: flex;
  align-content: flex-end;
  flex-direction: row;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  .sidebar-elem-padding-div {
    // border: 1px solid red;
    align-self: stretch;
    flex-basis: 15%;
  }
  .sidebar-icon-div {
    margin-right: 1vw;
  }
  &::before {
    content: "";
    position: absolute;
    right: 1vw;
    bottom: 0;
    height: 1px;
    width: 80%;
    border-bottom: 1px solid;
  }
  &:hover {
    transform: scale(1.12);
  }
}
</style>
