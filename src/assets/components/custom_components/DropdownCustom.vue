<template>
  <div class="dropdown-container">
    <div
      class="type-regular-openfrom-top293595-type-regular-openfrom-top293595"
    >
      <div class="selected-elem-dropdown">
        <button
          class="selected-elem-button"
          @click="openCustomDropdown = !openCustomDropdown"
        >
          <span class="type-regular-openfrom-top293595-text uIBody">{{
            selectedItem
          }}</span>
          <div class="arrow-icon-wrapper">
            <img
              alt="UnionI293488292148292067"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDEwIDUnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00wIDBMNSA1TDEwIDBIMFonIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzAuNScvPgo8L3N2Zz4K"
              class="arrow-icon"
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
              <span class="type-regular-openfrom-top293595-text5 uIBody">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownCustom",
  data() {
    return {
      items: ["GPS 1", "Item 2", "Item 3", "Item 4"],
      selectedItem: "GPS 1",
      openCustomDropdown: false,
    };
  },
};
</script>

<style scoped>
.dropdown-container {
  height: fit-content;
  width: fit-content;
  color: #eaeaea;
}
.type-regular-openfrom-top293595-type-regular-openfrom-top293595 {
  color: #eaeaea !important;
  background-color: #595959;
  width: 104px;
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
  padding: 4px 4px 4px 16px;
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
.type-regular-openfrom-top293595-text {
  color: var(--dl-color-onnormal-activecolorabb53);
  width: 52px;
  height: auto;
  margin: 0 8px 0 0;
  flex-grow: 1;
  align-self: auto;
  text-align: left;
  line-height: 24px;
  text-decoration: none;
}
.arrow-icon-wrapper {
  width: 24px;
  height: 24px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: flex-start;
  border-color: transparent;
}
.arrow-icon {
  top: 10px;
  left: 7px;
  width: 10;
  height: 5;
  position: absolute;
  color: #eaeaea !important;
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
.type-regular-openfrom-top293595-text1 {
  top: 4px;
  left: 8px;
  color: var(--dl-color-onflat-activecolorf1b28);
  height: auto;
  position: absolute;
  align-self: auto;
  text-align: left;
  line-height: 24px;
  text-decoration: none;
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
.type-regular-openfrom-top293595-text2 {
  top: 4px;
  left: 8px;
  color: var(--dl-color-onflat-activecolorf1b28);
  height: auto;
  position: absolute;
  align-self: auto;
  text-align: left;
  line-height: 24px;
  text-decoration: none;
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
.type-regular-openfrom-top293595-text3 {
  top: 4px;
  left: 8px;
  color: var(--dl-color-onflat-activecolorf1b28);
  height: auto;
  position: absolute;
  align-self: auto;
  text-align: left;
  line-height: 24px;
  text-decoration: none;
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
.type-regular-openfrom-top293595-text4 {
  top: 4px;
  left: 8px;
  color: var(--dl-color-onflat-activecolorf1b28);
  width: 60px;
  height: auto;
  position: absolute;
  align-self: auto;
  text-align: left;
  line-height: 24px;
  text-decoration: none;
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
.type-regular-openfrom-top293595-text5 {
  top: 4px;
  left: 8px;
  color: var(--dl-color-onflat-activecolorf1b28);
  height: auto;
  position: absolute;
  align-self: auto;
  text-align: left;
  line-height: 24px;
  text-decoration: none;
}
</style>
