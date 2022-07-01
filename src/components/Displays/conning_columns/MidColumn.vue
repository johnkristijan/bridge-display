<template>
  <div
    class="mid-container"
    :class="
      selectedScenesConfig.type === 'multiple'
        ? 'multiple-scenes-conningmid'
        : 'single-scene-conningmid'
    "
  >
    <div class="mid-container-heading">
      <p>Steering</p>
      <p>Manual</p>
      <hr />
    </div>
    <div class="mid-container-tunnel-thruster-container">
      <div style="display: flex; flex-direction: row; align-items: center">
        <ob-tunnel-thruster-large
          :showSetPoint="true"
          class="ob-thruster-large"
          :showSuggestedSetPoint="true"
          :showTickmarks="true"
          suggestedSetpoint="10"
          target="60"
          value="40"
        /><span
          >64
          <div>%</div></span
        >
      </div>
    </div>
    <div class="mid-container-azimuth">
      <div class="azimuth-inner">
        <img src="img/Azimuth.png" class="azimuth-pic" />
        <div class="azimuth-labels">
          <div>
            <p>Power</p>
            <p>67%</p>
          </div>
          <div>
            <p>Angle</p>
            <p>30°</p>
          </div>
        </div>
      </div>
    </div>
    <div class="main-engine-thrusters">
      <div class="main-engine-thruster">
        <div class="main-engine-labels">
          <div>
            <p>Pitch</p>
            <p>66%</p>
          </div>
          <div>
            <p>Pitch</p>
            <p>67%</p>
          </div>
        </div>
        <div class="main-engine-thruster-widget">
          <ob-main-engine-large
            class="ob-main-engine-thruster"
            showSetPoint=""
            showSuggestedSetPoint=""
            showTickmarks=""
            suggestedSetpoint="20"
            target="60"
            value="40"
          />
        </div>
      </div>
      <div class="main-engine-thruster">
        <div class="main-engine-thruster-widget">
          <ob-main-engine-large
            class="ob-main-engine-thruster"
            showSetPoint=""
            showSuggestedSetPoint=""
            showTickmarks=""
            suggestedSetpoint="20"
            target="60"
            value="40"
          />
        </div>
        <div class="main-engine-labels">
          <div>
            <p>Pitch</p>
            <p>66%</p>
          </div>
          <div>
            <p>Pitch</p>
            <p>67%</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mid-halvsirkel-container">
      <img src="img/halvsirkel1.png" alt="halvsirkel" />
      <img src="img/halvsirkel2.png" alt="halvsirkel" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { ScenesConfigI } from "../../custom_components/scene/SceneInterfaces";
export default defineComponent({
  name: "MidColumn",
  props: {
    selectedScenesConfig: {
      type: Object as PropType<ScenesConfigI>,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.mid-container {
  display: grid;
  height: 100%;
  column-gap: 3px;
  row-gap: 3px;
  grid-template-rows: 1fr 1fr 2fr 1.7fr 1.3fr;
  background-color: #333333;
  background-image: url("./Ship.png");
  background-repeat: no-repeat;
  background-origin: border-box;
  background-size: cover;
  background-position: center;
  border-left: 30px solid #333333;
  border-right: 30px solid #333333;
  border-bottom: 30px solid #333333;
  img {
    fill: #9f9f9f;
    width: 90%;
    height: 100%;
  }
}
.mid-container-heading {
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  & p:nth-child(1) {
    color: #efefef;
    font-size: 2rem;
    border-bottom: 1px;
    .single-scene-conningmid & {
      font-size: 3.5rem;
    }
  }
  & p:nth-child(2) {
    .single-scene-conningmid & {
      font-size: 3.5rem;
    }
    font-size: 2.1rem;
    font-weight: 600;
    color: #33bbff;
  }
}
.mid-container-tunnel-thruster-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  grid-row: 2 / 3;
  span {
    font-size: 2.1rem;
    font-weight: 600;
    color: #33bbff;
    margin-left: -1.5vw;
    margin-top: -0.5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    .single-scene-conningmid & {
      font-size: 3.1rem;
    }
    div {
      color: #efefef;
      font-size: 2.5rem;
      //   margin-top: 0.1rem;
    }
  }
  .ob-thruster-large {
    width: 7vw;
    height: 2.5vh;
    margin-left: -2vw;
    .single-scene-conningmid & {
      width: 10vw;
      height: 3.5vh;
    }
  }
}
.mid-container-azimuth {
  grid-row: 3 / 4;
  //   border: 1px solid blue;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  .azimuth-pic {
    height: 7vh;
    width: 5vw;
    .single-scene-conningmid & {
      height: 14vh;
      width: 10vw;
    }
  }
  .azimuth-inner {
    display: flex;
    .azimuth-labels {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      color: #9f9f9f;
      & p:nth-child(1) {
        font-size: 1.3rem;
        .single-scene-conningmid & {
          font-size: 2.3rem;
        }
      }
      & p:nth-child(2) {
        font-size: 2.3rem;
        color: #33bbff;
        .single-scene-conningmid & {
          font-size: 4.6rem;
        }
      }
    }
  }
}
.main-engine-thrusters {
  display: flex;
  grid-row: 4 / 5;
  justify-content: space-evenly;
  .main-engine-thruster {
    display: flex;
    justify-content: center;
    .main-engine-labels {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #9f9f9f;
      & div {
        & p:nth-child(1) {
          font-size: 1.3rem;
          .single-scene-conningmid & {
            font-size: 2.3rem;
          }
        }
        & p:nth-child(2) {
          font-size: 2.3rem;
          color: #33bbff;
          .single-scene-conningmid & {
            font-size: 4.6rem;
          }
        }
      }
    }
    .main-engine-thruster-widget {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .ob-main-engine-thruster {
        position: relative;
        top: -4vh;
        height: 2.5vh;
        width: 1.25vw;
      }
    }
  }
}
.mid-halvsirkel-container {
  grid-row: 5 / 6;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  img {
    height: 6vh;
    width: 6vw;
    .single-scene-conningmid & {
      height: 12vh;
      width: 12vw;
    }
  }
}
</style>
