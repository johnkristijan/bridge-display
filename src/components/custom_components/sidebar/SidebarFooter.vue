<template>
  <div class="sidebar-footer-container">
    <div class="sidebar-footer-list">
      <div
        v-for="element in footerList"
        :key="element.label"
        class="sidebar-footer-list-element"
      >
        <font-awesome-icon :icon="element.icon" />
        <div class="sidebar-footer-list-element-label">
          {{ element.label }}
        </div>
      </div>
    </div>
    <div class="sidebar-footer-logo">
      <img
        src="moenlogo.png"
        alt="moen marin logo"
        style="width: 100%; height: auto; background-color: white"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      footerList: [
        {
          icon: "fa-triangle-exclamation",
          label: "Alert list",
        },
        {
          icon: "fa-gear",
          label: "Settings",
        },
        {
          icon: "fa-question-circle",
          label: "Help & Support",
        },
      ],
    };
  },
});
</script>

<style lang="scss">
.sidebar-footer-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  min-height: 241px;
  width: 100%;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #fcfcfc;
  .sidebar-footer-list {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-grow: 1;
    .sidebar-footer-list-element {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 1vh 2vw;
      font-size: 2rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.4s;
      .sidebar-footer-list-element-label {
        margin-left: 2vw;
      }
      &::before {
        content: "";
        position: absolute;
        right: 1vw;
        bottom: 0;
        height: 1px;
        width: 95%; /* or 100px */
        border-bottom: 1px solid;
      }
      &:hover {
        transform: scale(1.12);
      }
    }
    &::before {
      content: "";
      position: absolute;
      right: 1vw;
      top: 0;
      height: 1px;
      width: 95%; /* or 100px */
      border-top: 1px solid;
    }
  }
}
</style>
