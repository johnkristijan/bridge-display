<template>
  <div class="toolbar-container">
    <div class="toolbar-container-inner">
      <ul class="toolbar-elements-list-inner">
        <li v-for="(elem, i) in navbarElems" :key="`${elem}-${i}`">
          {{ elem }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

interface NavbarElements {
  label?: string;
  iconsrc?: string;
  id: string;
}
export default defineComponent({
  data() {
    return {
      navbarElemsLeft: ["1", "2", "3"] as string[],
      navbarElemsRight: ["1", "2", "3"] as string[],
    };
  },
  computed: {},
});
</script>

<style lang="scss">
.toolbar-container {
  // border: 1px solid hotpink;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  position: absolute;
  height: 48px;
  left: 0px;
  right: 0px;
  top: 0px;
  .toolbar-container-inner {
    // border: 1px solid salmon;
    width: 1920px;
    height: 48px;
    background: #fcfcfc;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
}
</style>
