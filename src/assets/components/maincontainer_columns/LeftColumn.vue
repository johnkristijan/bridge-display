<template>
  <div class="left-container">
    <div class="ship-info-container">
      <div class="box-header-class">
        <span>OWN SHIP INFO</span
        ><font-awesome-icon
          :icon="['fas', 'ellipsis']"
          size="lg"
        ></font-awesome-icon>
      </div>
      <div class="ship-info-container-inner">
        <div class="HDG-container">
          <h2>HDG</h2>
          <h1>000°</h1>
          <DropdownCustom />
        </div>
        <div class="COG-container">
          <h2>COG</h2>
          <h1>000°</h1>
          <DropdownCustom />
        </div>
        <div class="ROT-container">
          <h2>ROT</h2>
          <h1>124°</h1>
          <DropdownCustom />
        </div>
        <div class="compass-container">
          <ob-hdg-large
            courseOverGround="55"
            heading="60"
            :northUp="true"
            setPoint="40"
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
        <div style="display: flex; align-items: center"><DropdownCustom /></div>
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
        <div style="display: flex; align-items: center"><DropdownCustom /></div>
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
            <img src="/img/arrow-left.jpg" alt="" />
          </div>
          <div class="steering-container">
            <h2 style="grid-row: 1 / 2; grid-column: 1 / 3; margin: 0">
              Steering mode
            </h2>
            <h1
              style="
                grid-row: 1 / 2;
                grid-column: 3 / 4;
                margin-top: 0;
                line-height: unset;
              "
            >
              Track
            </h1>
            <div style="grid-row: 2 / 3; grid-column: 1 / 2">
              <p style="font-size: 12px">Course</p>
              <p style="color: #ffc800">000°</p>
            </div>
            <div style="grid-row: 2 / 3; grid-column: 2 / 3">
              <p style="font-size: 12px">ROT</p>
              <p>---/min</p>
            </div>
            <div style="grid-row: 2 / 3; grid-column: 3 / 4">
              <p style="font-size: 12px">Radius</p>
              <p>---</p>
            </div>
          </div>
        </div>
        <div class="route-container-right">
          <div>
            <p style="color: #eaeaea; font-size: 16px; margin: 5px">Next leg</p>
            <div class="route-container-right-row">
              <div class="route-container-right-col">
                <p style="font-size: 12px; margin: 0px">Next course</p>
                <p style="color: #eaeaea; font-size: 16px">000</p>
              </div>
              <div class="route-container-right-col">
                <p style="font-size: 12px; margin: 0px">Dist to WOL</p>
                <p style="color: #eaeaea; font-size: 16px">0.9 NM</p>
              </div>
              <div class="route-container-right-col">
                <p style="font-size: 12px; margin: 0px">Time to WOL</p>
                <p style="color: #eaeaea; font-size: 16px">00:00:12</p>
              </div>
            </div>
          </div>
          <div>
            <p style="color: #eaeaea; font-size: 16px; margin: 5px">Next leg</p>
            <div class="route-container-right-row">
              <div class="route-container-right-col">
                <p style="font-size: 12px; margin: 0px">Next course</p>
                <p style="color: #eaeaea; font-size: 16px">000</p>
              </div>
              <div class="route-container-right-col">
                <p style="font-size: 12px; margin: 0px">Dist to WOL</p>
                <p style="color: #eaeaea; font-size: 16px">0.9 NM</p>
              </div>
              <div class="route-container-right-col">
                <p style="font-size: 12px; margin: 0px">Time to WOL</p>
                <p style="color: #eaeaea; font-size: 16px">00:00:12</p>
              </div>
            </div>
          </div>
          <div>
            <p style="color: #eaeaea; font-size: 16px; margin: 5px">Next leg</p>
            <div class="route-container-right-row">
              <div class="route-container-right-col">
                <p style="font-size: 12px; margin: 0px">Next course</p>
                <p style="color: #eaeaea; font-size: 16px">000</p>
              </div>
              <div class="route-container-right-col">
                <p style="font-size: 12px; margin: 0px">Dist to WOL</p>
                <p style="color: #eaeaea; font-size: 16px">0.9 NM</p>
              </div>
              <div class="route-container-right-col">
                <p style="font-size: 12px; margin: 0px">Time to WOL</p>
                <p style="color: #eaeaea; font-size: 16px">00:00:12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownCustom from "../custom_components/DropdownCustom.vue";
export default {
  name: "LeftConainer",
  components: {
    DropdownCustom,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  line-height: 22px;
  font-weight: 600;
  font-size: 20px;
  margin: 10px;
}
h1 {
  line-height: 45px;
  font-size: 40px;
  font-weight: 200;
  text-align: left;
  margin: 10px;
  color: #33bbff;
  margin-left: 10px;
}
.left-container {
  display: grid;
  max-height: 100vh;
  column-gap: 3px;
  row-gap: 3px;
  grid-template-rows: 4fr 1fr 4fr;
  color: #9f9f9f;
}
.ship-info-container {
  background-color: #404040;
  border-radius: 5px;
  grid-row: 1 / 2;
}
.box-header-class {
  width: 100%;
  padding: 8px;
  line-height: 20px;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid #9f9f9f;
}
.box-header-class-single {
  width: 100%;
  padding: 8px;
  line-height: 20px;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  border-bottom: 1px solid #9f9f9f;
}
.ship-info-container-inner {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 4fr;
}
.HDG-container {
  padding: 5px;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}
.COG-container {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
}
.ROT-container {
  grid-row: 3 / 4;
  grid-column: 1 / 2;
}
.compass-container {
  grid-row: 1 / 4;
  grid-column: 2 / 3;
  color: #33bbff;
}
.gps-and-utc-container {
  grid-row: 2 / 3;
  background-color: #404040;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.gps-and-utc-container span {
  color: #33bbff;
  line-height: 25.5px;
  font-size: 22px;
  font-weight: 200;
}
.route-container {
  grid-row: 3 / 4;
  background-color: #404040;
  height: fit-content;
}
.route-container-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.route-container-left {
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2.5fr 1fr;
}
.route-container-left-left {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.route-container-left div h1 {
  margin: 5px;
  font-size: 25px;
}
.route-container-left div h2 {
  color: #eaeaea;
}
.route-container-left div p {
  color: #9f9f9f;
  font-size: 16px;
  margin: 5px;
}

.course-container {
  grid-column: 1 / 2;
  width: 150px;
}
.course-img-container {
  grid-column: 2 / 3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.steering-container {
  display: grid;
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}
.route-container-right {
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
}
.route-container-right-col p {
  margin: 5px;
}
.route-container-right-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  box-shadow: 0px 24px 3px -24px #9f9f9f;
}
.route-container-right-col {
  display: flex;
  flex-direction: column;
}
</style>
