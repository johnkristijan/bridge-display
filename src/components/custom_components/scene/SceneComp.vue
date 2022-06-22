<template>
  <div class="scene-container">
    <div class="subscene-container" id="subscene-1">
      <iframe src="https://dev.m-link.no" width="800px" height="600px"></iframe>
    </div>
    <div class="subscene-container" id="subscene-2"></div>
    <div class="subscene-container" id="subscene-3"></div>
    <div class="subscene-container" id="subscene-4"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<style lang="scss">
.scene-container {
  // border: 1px solid hotpink;
  top: 48px;
  right: 0;
  height: calc(100% - 48px);
  min-width: calc(100% - 340px);
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  .subscene-container {
    border: 1px solid black;
  }
}
</style>
