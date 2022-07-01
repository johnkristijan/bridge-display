<template>
  <div class="dropdown-container">
    <div class="selected-elem-dropdown-container">
      <div class="selected-elem-dropdown">
        <button
          class="selected-elem-button"
          @click="openCustomDropdown = !openCustomDropdown"
        >
          <span
            class="dropdown-text-button-container uIBody"
            :class="
              selectedScenesConfig.type === 'multiple' && 'multiple-styling'
            "
            >{{ selectedItem }}</span
          >
          <div
            class="arrow-icon-wrapper"
            :class="
              selectedScenesConfig.type === 'multiple' && 'multiple-styling'
            "
          >
            <img
              alt="arrow"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDEwIDUnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00wIDBMNSA1TDEwIDBIMFonIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzAuNScvPgo8L3N2Zz4K"
              class="arrow-icon"
              :class="
                selectedScenesConfig.type === 'multiple' && 'multiple-styling'
              "
            />
          </div>
        </button>
      </div>
      <div v-if="openCustomDropdown">
        <div
          class="type-regular-openfrom-top293595-listitems293524"
          v-for="item in items"
          :key="item"
        >
          <div
            class="type-regular-openfrom-top293595-dropdown-option-items293492"
          >
            <div
              class="type-regular-openfrom-top293595-frame-master-regular-i293492292516"
            >
              <span class="dropdown-text-button-container uIBody">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { ScenesConfigI } from "../scene/SceneInterfaces";

export default defineComponent({
  name: "DropdownCustom",
  props: {
    selectedScenesConfig: {
      type: Object as PropType<ScenesConfigI>,
      required: true,
    },
  },
  data() {
    return {
      items: ["GPS 1", "Item 2", "Item 3", "Item 4"],
      selectedItem: "GPS 1",
      openCustomDropdown: false,
    };
  },
});
</script>

<style scoped lang="scss">
.dropdown-container {
  height: fit-content;
  width: fit-content;
  color: #eaeaea;
}
.selected-elem-dropdown-container {
  color: #eaeaea !important;
  background-color: #595959;
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: 6px;
  flex-direction: column;
}
.selected-elem-dropdown {
  display: flex;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
}
.selected-elem-button {
  color: #eaeaea !important;
  display: flex;
  padding: 4px 4px 4px 8px;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: center;
  border-color: rgba(0, 0, 0, 0.30000001192092896);
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  background-color: var(--dl-color-normal-enabledbackgroundcolor9723d);
  cursor: pointer;
}
.dropdown-text-button-container {
  color: var(--dl-color-onnormal-activecolorabb53);
  width: 5vw;
  height: auto;
  margin: 0 8px 0 0;
  flex-grow: 1;
  align-self: auto;
  text-align: left;
  text-decoration: none;
  line-height: 4rem;
  font-size: 3rem;
  &.multiple-styling {
    width: 2vw !important;
    line-height: 1.7rem;
    font-size: 1.3rem;
  }
}
.arrow-icon-wrapper {
  width: 4rem;
  height: 4rem;
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: flex-start;
  border-color: transparent;
  &.multiple-styling {
    width: 2rem;
    height: 2rem;
  }
}
.arrow-icon {
  top: 15px;
  left: 7px;
  width: 2rem;
  height: 2rem;
  position: absolute;
  color: #eaeaea !important;
  &.multiple-styling {
    top: 10px;
    left: 7px;
    width: 0.5vw;
    height: 0.5vh;
  }
}
.type-regular-openfrom-top293595-listitems293524 {
  display: flex;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
}
.type-regular-openfrom-top293595-dropdown-option-items293489 {
  display: flex;
  padding: 8px 0;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-radius: 20px;
  flex-direction: column;
}
.type-regular-openfrom-top293595-frame-master-regular-i293489292516 {
  width: 104px;
  height: 32px;
  display: flex;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-radius: 6px;
  background-color: var(--dl-color-flat-enabledbackgroundcolor6934d);
}

.type-regular-openfrom-top293595-dropdown-option-items293541 {
  display: flex;
  padding: 8px 0;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-radius: 20px;
  flex-direction: column;
}
.type-regular-openfrom-top293595-frame-master-regular-i293541292516 {
  width: 104px;
  height: 32px;
  display: flex;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-radius: 6px;
  background-color: var(--dl-color-flat-enabledbackgroundcolor6934d);
}

.type-regular-openfrom-top293595-dropdown-option-items293490 {
  display: flex;
  padding: 8px 0;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-radius: 20px;
  flex-direction: column;
}
.type-regular-openfrom-top293595-frame-master-regular-i293490292516 {
  width: 104px;
  height: 32px;
  display: flex;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-radius: 6px;
  background-color: var(--dl-color-flat-enabledbackgroundcolor6934d);
}

.type-regular-openfrom-top293595-dropdown-option-items293491 {
  display: flex;
  padding: 8px 0;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
}
.type-regular-openfrom-top293595-frame-master-regular-i293491292599 {
  width: 104px;
  height: 32px;
  display: flex;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-radius: 6px;
  background-color: var(--dl-color-flat-enabledbackgroundcolor6934d);
}
.type-regular-openfrom-top293595-iconcontainer-i293491292599292466 {
  top: 4px;
  left: 76px;
  width: 24px;
  height: 24px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  border-color: transparent;
}

.type-regular-openfrom-top293595-dropdown-option-items293492 {
  display: flex;
  padding: 8px 0;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-radius: 20px;
  flex-direction: column;
}
.type-regular-openfrom-top293595-frame-master-regular-i293492292516 {
  width: 104px;
  height: 32px;
  display: flex;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-radius: 6px;
  background-color: var(--dl-color-flat-enabledbackgroundcolor6934d);
}
</style>
