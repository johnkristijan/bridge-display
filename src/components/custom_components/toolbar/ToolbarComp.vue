<template>
  <div class="toolbar-container">
    <div class="toolbar-container-inner">
      <ul class="toolbar-elements-list">
        <li v-for="(elem, i) in navbarElemsLeft" :key="`${elem}-${i}`">
          {{ elem }}
        </li>
        <li
          v-for="(elem, i) in navbarElemsRight"
          :key="`${elem}-${i}`"
          :style="i === 0 ? 'margin-left: auto' : ''"
        >
          {{ elem }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

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
    .toolbar-elements-list {
      border: 2px solid red;
      display: flex;
      flex-direction: row;
      height: 100%;
      list-style-type: none;
      align-items: center;
    }
  }
}
</style>
