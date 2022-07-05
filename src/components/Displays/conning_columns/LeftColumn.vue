<template>
  <div
    class="left-container"
    :class="
      selectedScenesConfig.type === 'multiple'
        ? 'multiple-scenes-conningleft'
        : 'single-scene-conningleft'
    "
  >
    <div class="ship-info-container">
      <div class="box-header-class">
        <span>OWN SHIP INFO</span
        ><font-awesome-icon
          :icon="['fas', 'ellipsis']"
          size="sm"
        ></font-awesome-icon>
      </div>
      <div class="ship-info-container-inner">
        <div class="HDG-container">
          <h2>HDG</h2>
          <h1>000°</h1>
          <DropdownCustom :selectedScenesConfig="selectedScenesConfig" />
        </div>
        <div class="COG-container">
          <h2>COG</h2>
          <h1>000°</h1>
          <DropdownCustom :selectedScenesConfig="selectedScenesConfig" />
        </div>
        <div class="ROT-container">
          <h2>ROT</h2>
          <h1>124°</h1>
          <DropdownCustom :selectedScenesConfig="selectedScenesConfig" />
        </div>
        <div class="compass-container">
          <ob-hdg-medium
            courseOverGround="55"
            :northUp="true"
            setPoint="40"
            heading="315"
          />
        </div>
      </div>
    </div>
    <div class="gps-and-utc-container">
      <div style="display: flex; flex-direction: row">
        <div
          style="display: flex; flex-direction: column; align-items: flex-start"
        >
          <span>41°03.441`N</span>
          <span>071°16.676`W</span>
        </div>
        <div style="display: flex; align-items: center">
          <DropdownCustom :selectedScenesConfig="selectedScenesConfig" />
        </div>
      </div>
      <div style="display: flex; flex-direction: row">
        <div
          style="display: flex; flex-direction: column; align-items: flex-start"
        >
          <span
            ><font-awesome-icon
              :icon="['fas', 'clock']"
              style="color: #9f9f9f"
            />13:33:37</span
          >
          <span
            ><font-awesome-icon
              :icon="['fas', 'calendar-days']"
              style="color: #9f9f9f"
            />13-06-2022</span
          >
        </div>
        <div style="display: flex; align-items: center">
          <DropdownCustom :selectedScenesConfig="selectedScenesConfig" />
        </div>
      </div>
    </div>
    <div class="route-container">
      <div class="box-header-class-single">
        <span>ROUTE</span>
      </div>
      <div class="route-container-inner">
        <div class="route-container-left">
          <div class="route-container-left-left">
            <div class="course-container">
              <h2>Current leg</h2>
              <div>
                <p>Course</p>
                <h1>000°</h1>
              </div>
              <div>
                <p>Dist to WOL</p>
                <h1>000°</h1>
              </div>
              <div>
                <p>Time to WOL</p>
                <h1>000°</h1>
              </div>
            </div>
          </div>
          <div class="course-img-container">
            <img src="img/arrow_left.svg" alt="" />
          </div>
          <div class="steering-container">
            <h2 style="grid-row: 1 / 2; grid-column: 1 / 3; margin: 0">
              Steering mode
            </h2>
            <h1 style="grid-row: 1 / 2; grid-column: 3 / 4">Track</h1>
            <div style="grid-row: 2 / 3; grid-column: 1 / 2">
              <p>Course</p>
              <p><span>000°</span></p>
            </div>
            <div style="grid-row: 2 / 3; grid-column: 2 / 3">
              <p>ROT</p>
              <p>---/min</p>
            </div>
            <div style="grid-row: 2 / 3; grid-column: 3 / 4">
              <p>Radius</p>
              <p>---</p>
            </div>
          </div>
        </div>
        <div class="route-container-right">
          <div>
            <p class="route-container-right-heading">Next leg</p>
            <div class="route-container-right-row">
              <div class="route-container-right-col">
                <p>Next course</p>
                <p>000</p>
              </div>
              <div class="route-container-right-col">
                <p>Dist to WOL</p>
                <p>0.9 NM</p>
              </div>
              <div class="route-container-right-col">
                <p>Time to WOL</p>
                <p>00:00:12</p>
              </div>
            </div>
          </div>
          <div>
            <p class="route-container-right-heading">Next leg</p>
            <div class="route-container-right-row">
              <div class="route-container-right-col">
                <p>Next course</p>
                <p>000</p>
              </div>
              <div class="route-container-right-col">
                <p>Dist to WOL</p>
                <p>0.9 NM</p>
              </div>
              <div class="route-container-right-col">
                <p>Time to WOL</p>
                <p>00:00:12</p>
              </div>
            </div>
          </div>
          <div>
            <p class="route-container-right-heading">Next leg</p>
            <div class="route-container-right-row">
              <div class="route-container-right-col">
                <p>Next course</p>
                <p>000</p>
              </div>
              <div class="route-container-right-col">
                <p>Dist to WOL</p>
                <p>0.9 NM</p>
              </div>
              <div class="route-container-right-col">
                <p>Time to WOL</p>
                <p>00:00:12</p>
              </div>
            </div>
          </div>
          <div>
            <p class="route-container-right-heading">Destination</p>
            <div class="route-container-right-row">
              <div class="route-container-right-col">
                <p>ETA</p>
                <p>000</p>
              </div>
              <div class="route-container-right-col">
                <p>Remaining time</p>
                <p>00:01:37</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { ScenesConfigI } from "../../custom_components/scene/SceneInterfaces";
import DropdownCustom from "../../custom_components/standard_components/DropdownCustom.vue";
export default defineComponent({
  name: "LeftConainer",
  components: {
    DropdownCustom,
  },
  props: {
    selectedScenesConfig: {
      type: Object as PropType<ScenesConfigI>,
      required: true,
    },
  },
  data() {
    return {};
  },
});
</script>

<style scoped lang="scss">
h2 {
  // text-align: left;
  line-height: 1rem;
  font-weight: 600;
  font-size: 1rem;
  margin: 0.2rem;
  .single-scene-conningleft & {
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
  .single-scene-conningleft & {
    line-height: 4.4rem;
    font-size: 4.4rem;
  }
}
.left-container {
  display: grid;
  /* max-height: 100vh; */
  height: 100%;
  column-gap: 3px;
  row-gap: 3px;
  grid-template-rows: 4fr 1fr 4fr;
  color: #9f9f9f;
  &.multiple-scenes-conningleft {
    max-width: 39vw;
    max-height: 44.9vh;
  }
  background-color: #333333;
}
.ship-info-container {
  background-color: #404040;
  border-radius: 5px;
  grid-row: 1 / 2;
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
.box-header-class-single {
  width: 100%;
  display: flex;
  height: 2vh;
  padding: 0.3rem;
  line-height: 1.7rem;
  font-weight: 600;
  font-size: 1.5rem;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid #9f9f9f;
}
.ship-info-container-inner {
  height: calc(100% - 3.5vh);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 3fr;
}
.HDG-container {
  padding: 5px;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  .single-scene-conningleft & {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}
.COG-container {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  .single-scene-conningleft & {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.ROT-container {
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  .single-scene-conningleft & {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
.compass-container {
  grid-row: 1 / 4;
  grid-column: 2 / 3;
  color: #33bbff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.gps-and-utc-container {
  grid-row: 2 / 3;
  background-color: #404040;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.gps-and-utc-container span {
  color: #33bbff;
  font-weight: 200;
  line-height: 1.2rem;
  font-size: 1.1rem;
  .single-scene-conningleft & {
    line-height: 3.4rem;
    font-size: 3.4rem;
    margin-right: 0.3rem;
  }
}
.route-container {
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  background-color: #404040;
  height: 100%;
}
.route-container-inner {
  display: grid;
  height: calc(100% - 2.3vh);
  grid-template-columns: 1fr 1fr;
}
.route-container-left {
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr;
}
.route-container-left-left {
  grid-row: 1 / 2;
  grid-column: 1 /2;
}
.route-container-left div h1 {
  margin: 5px;
  font-size: 25px;
  .single-scene-conningleft & {
    font-size: 2.4rem;
  }
}
.route-container-left div h2 {
  color: #eaeaea;
  .single-scene-conningleft & {
    font-size: 2.4rem;
  }
}
.route-container-left div p {
  color: #9f9f9f;
  font-size: 1rem;
  margin: 5px;
  text-align: left;
  .single-scene-conningleft & {
    font-size: 2.5rem;
  }
}

.course-container {
  h2 {
    .single-scene-conningleft & {
      font-size: 2.5rem;
    }
  }
  div {
    .single-scene-conningleft & {
      padding: 0.5vh 0.5vw;
    }
  }
}
.course-img-container {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
.steering-container {
  display: grid;
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  & div {
    & p:first-child {
      .single-scene-conningleft & {
        font-size: 3rem;
      }
    }
    & p:nth-child(2) {
      .single-scene-conningleft & {
        font-size: 3rem;
      }
      span {
        color: #ffc800;
      }
    }
  }
}
.route-container-right {
  grid-column: 2 / 3;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  .single-scene-conningleft & {
    justify-content: space-around;
  }
  & .route-container-right-heading {
    color: #eaeaea;
    font-size: 1.4rem;
    padding-top: 5px;
    .single-scene-conningleft & {
      font-size: 2rem;
    }
  }
}
.route-container-right-col {
  // margin: 5px;
  & p:first-child {
    font-size: 1rem;
    .single-scene-conningleft & {
      font-size: 2rem;
      margin: 0px;
    }
  }
  // lortpeis
  & p:nth-child(2) {
    color: #eaeaea;
    font-size: 1.2rem;
    .single-scene-conningleft & {
      font-size: 2.2rem;
    }
    font-size: 1rem;
  }
}
.route-container-right-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // padding: 5px;
  box-shadow: 0px 24px 3px -24px #9f9f9f;
}
</style>
