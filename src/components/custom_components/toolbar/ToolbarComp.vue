<template>
  <div class="toolbar-container" :class="darkMode ? 'darkmode' : ''">
    <div class="toolbar-container-inner">
      <ul class="toolbar-elements-list">
        <li v-for="(elem, i) in navbarElemsLeft" :key="`${elem}-${i}`">
          <ToolbarIcon
            :toolbarIconProps="elem"
            @click="topBarElemClick(elem)"
            :darkMode="darkMode"
          />
        </li>
        <li class="logo-list-item">
          <h1>Moen Marin</h1>
          <font-awesome-icon icon="anchor" size="2x" />
        </li>
        <li
          v-for="(elem, i) in navbarElemsRight"
          :key="`${elem}-${i}`"
          :style="i === 0 ? 'margin-left: auto' : ''"
        >
          <ToolbarIcon
            :toolbarIconProps="elem"
            :darkMode="darkMode"
            @click="topBarElemClick(elem)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ToolbarIconI } from "./ToolbarInterface";
import ToolbarIcon from "./ToolbarIcon.vue";
export default defineComponent({
  name: "ToolbarComp",
  props: {
    darkMode: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      navbarElemsLeft: [
        {
          label: "expand-sidebar",
          iconsrc: "bars",
          id: "topbar-elem-1",
        },
      ] as ToolbarIconI[],
      navbarElemsRight: [
        {
          label: "bell",
          iconsrc: "bell",
          id: "topbar-elem-2",
        },
        {
          label: "profile",
          iconsrc: "user",
          id: "topbar-elem-3",
        },
        {
          label: "moon",
          iconsrc: "moon",
          id: "topbar-elem-3",
        },
        {
          label: "tiles",
          iconsrc: "border-all",
          id: "topbar-elem-4",
        },
      ] as ToolbarIconI[],
    };
  },
  components: {
    ToolbarIcon,
  },
  computed: {},
  methods: {
    topBarElemClick(toolbarButton: ToolbarIconI) {
      if (toolbarButton.label === "expand-sidebar") {
        this.$emit("toggleSidebar");
      }
      if (toolbarButton.label === "tiles") {
        this.$emit("toggleMultiple");
      }
      if (toolbarButton.label === "moon") {
        this.$emit("toggleDarkmode");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.toolbar-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  position: absolute;
  height: 3.5vh;
  left: 0px;
  right: 0px;
  top: 0px;
  .toolbar-container-inner {
    width: 100%;
    height: 3.5vh;
    background-color: #fcfcfc;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    .toolbar-elements-list {
      display: flex;
      flex-direction: row;
      height: 100%;
      list-style-type: none;
      align-items: center;
      li {
        flex-basis: 3%;
      }
      .logo-list-item {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 12px;
        flex-basis: 10%;
        svg {
          margin-top: 3px;
        }
      }
    }
  }
}
.darkmode {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  position: absolute;
  height: 3.5vh;
  left: 0px;
  right: 0px;
  top: 0px;
  .toolbar-container-inner {
    width: 100%;
    height: 3.5vh;
    background-color: #9f9f9f;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    .toolbar-elements-list {
      display: flex;
      flex-direction: row;
      height: 100%;
      list-style-type: none;
      align-items: center;
      li {
        flex-basis: 3%;
      }
      .logo-list-item {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 12px;
        flex-basis: 10%;
        svg {
          margin-top: 3px;
        }
      }
    }
  }
}
</style>
