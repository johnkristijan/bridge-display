<template>
  <div
    class="right-column-container"
    :class="
      selectedScenesConfig.type === 'multiple'
        ? 'multiple-scenes-conningright'
        : 'single-scene-conningright'
    "
  >
    <div class="conning-speed-container">
      <div class="box-header-class">
        <span>SPEED</span
        ><font-awesome-icon
          :icon="['fas', 'ellipsis']"
          size="sm"
        ></font-awesome-icon>
      </div>
      <div class="conning-speed-container-inner">
        <div class="conning-speed-widget">
          <img src="img/speed.svg" />
        </div>
        <div class="STW-container">
          <h2>STW</h2>
          <h1>1.2 <small>kn</small></h1>
          <DropdownCustom :selectedScenesConfig="selectedScenesConfig" />
        </div>
        <div class="Wind-container">
          <h2>Wind</h2>
          <h1>1.2 <small>kn</small></h1>
          <DropdownCustom :selectedScenesConfig="selectedScenesConfig" />
        </div>
        <div class="current-container">
          <h2>Current</h2>
          <h1>3.5 <small>kn</small></h1>
          <DropdownCustom :selectedScenesConfig="selectedScenesConfig" />
        </div>
      </div>
    </div>
    <div class="conning-depth-container">
      <img src="img/depth.svg" alt="" />
    </div>
    <div class="weather-container">
      <img src="img/weather.svg" alt="" />
    </div>
    <div class="pitch-roll-container">
      <img src="img/pitchroll.svg" alt="" />
    </div>
    <div class="wind-container">
      <img src="img/wind.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { ScenesConfigI } from "../../custom_components/scene/SceneInterfaces";
import DropdownCustom from "../../custom_components/standard_components/DropdownCustom.vue";

export default defineComponent({
  name: "RightColumn",
  components: {
    DropdownCustom,
  },
  props: {
    selectedScenesConfig: {
      type: Object as PropType<ScenesConfigI>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
h2 {
  line-height: 1rem;
  font-weight: 600;
  font-size: 1rem;
  margin: 0.2rem;
  .single-scene-conningright & {
    line-height: 4rem;
    font-size: 4rem;
  }
}
h1 {
  line-height: 1.2rem;
  font-size: 1.2rem;
  font-weight: 200;
  text-align: left;
  margin: 10px;
  color: #33bbff;
  margin-left: 10px;
  small {
    font-size: 0.7rem;
    color: #9f9f9f;
  }
  .single-scene-conningright & {
    line-height: 4.4rem;
    font-size: 4.4rem;
    small {
      font-size: 2.5rem;
      color: #9f9f9f;
    }
  }
}
.right-column-container {
  background-color: #333333;
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 3px;
  row-gap: 3px;
}
.conning-speed-container {
  background-color: #404040;
  color: #9f9f9f;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  .conning-speed-container-inner {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    height: calc(100% - 3.5rem);
    width: 100%;
    .conning-speed-widget {
      grid-row: 1 / 4;
      grid-column: 1 / 2;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .STW-container {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
      .single-scene-conningright & {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    .Wind-container {
      grid-row: 2 / 3;
      grid-column: 2 / 3;

      .single-scene-conningright & {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    .current-container {
      grid-row: 3 / 4;
      grid-column: 2 / 3;
      .single-scene-conningright & {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
}
.conning-depth-container {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  //   border: 1px solid red;
  img {
    width: 100%;
    height: 100%;
  }
}
.weather-container {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  //   border: 1px solid red;
  img {
    width: 100%;
    height: 100%;
  }
}
.pitch-roll-container {
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  //   border: 1px solid red;
  img {
    width: 100%;
    height: 100%;
  }
}
.wind-container {
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  //   border: 1px solid red;
  position: relative;
  top: -7px;
  img {
    width: 100%;
    height: 100%;
  }
}
.box-header-class {
  width: 100%;
  padding: 8px;
  line-height: 1rem;
  height: 3.5rem;
  font-weight: 600;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid #9f9f9f;
}
</style>
