<template>
  <div
    class="scene-container-multiple"
    :class="{ 'open-sidebar': openSidebar, darkmode: darkMode }"
    v-if="selectedScenesConfig.type === 'multiple'"
  >
    <div
      v-for="(scene, i) in selectedScenesConfig.multipleSceneList"
      class="subscene-container"
      :key="`${i}-scene-multiple`"
      :id="`subscene-${i}`"
    >
      <iframe
        v-if="scene.isIframe"
        :src="scene.iframeUrl"
        class="iframe-scene-multiple"
      ></iframe>
      <video
        v-else-if="scene.isHDMI && scene.HDMIUrl === 'stream1'"
        class="full-hd"
        :src-object.prop.camel="stream1"
        autoplay
      >
        &nbsp;
      </video>
      <video
        v-else-if="scene.isHDMI && scene.HDMIUrl === 'stream2'"
        class="full-hd"
        :src-object.prop.camel="stream2"
        autoplay
      >
        &nbsp;
      </video>
      <div v-else style="height: 100%; width: 100%">
        <div
          v-if="scene.option.toUpperCase() === 'CONNING'"
          style="
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
          "
        >
          <Conning :selectedScenesConfig="selectedScenesConfig" />
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="scene-container-single"
    :class="openSidebar && 'open-sidebar'"
  >
    <iframe
      v-if="selectedScenesConfig.singleScene.isIframe"
      :src="`${selectedScenesConfig.singleScene.iframeUrl}`"
      class="iframe-scene-single"
    ></iframe>
    <video
      v-else-if="
        selectedScenesConfig.singleScene.isHDMI &&
        selectedScenesConfig.singleScene.HDMIUrl === 'stream1'
      "
      class="ultra-hd"
      :src-object.prop.camel="stream1"
      autoplay
    >
      &nbsp;
    </video>
    <video
      v-else-if="
        selectedScenesConfig.singleScene.isHDMI &&
        selectedScenesConfig.singleScene.HDMIUrl === 'stream2'
      "
      class="ultra-hd"
      :src-object.prop.camel="stream2"
      autoplay
    >
      &nbsp;
    </video>
    <div v-else style="height: 100%; width: 100%; height: 100%">
      <div
        v-if="
          selectedScenesConfig.singleScene.option.toUpperCase() === 'CONNING'
        "
        style="width: 100%; height: 100%"
      >
        <Conning :selectedScenesConfig="selectedScenesConfig" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ScenesConfigI } from "../scene/SceneInterfaces";
import Conning from "../../Displays/Conning.vue";
export default defineComponent({
  name: "SceneComponent",
  props: {
    openSidebar: {
      type: Boolean,
      required: true,
    },
    selectedScenesConfig: {
      type: Object as PropType<ScenesConfigI>,
      required: true,
    },
    darkMode: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Conning,
  },
  data() {
    return {
      sceneFrames: [],
      multipleScreens: false,
      stream1: null as any,
      stream2: null as any,
    };
  },
  methods: {},
  async mounted() {
    // use this method to show ID's of the available devices (cameras, streams, etc.)
    const devs = await navigator.mediaDevices.enumerateDevices();
    console.log("devs: ", devs);

    const avioStream = await navigator.mediaDevices.getUserMedia({
      video: {
        deviceId:
          "a25625050854bbcaba73d10cf7fd74c0de8d35cf3d21e969ebd3813b26af9943",
        // width: 1920,
        // height: 1080,
      },
    });
    this.stream1 = avioStream;

    const webcamStream = await navigator.mediaDevices.getUserMedia({
      video: {
        deviceId:
          "c099ebc4975b6de6e482240ec0077f7ffd04ffbd6e71e600bc1d17550ee0fea4",
        // width: 1920,
        // height: 1080,
      },
    });
    this.stream2 = webcamStream;
  },
});
</script>

<style>
.full-hd {
  width: 1920px;
  height: 1080px;
}
.ultra-hd {
  width: 3840px;
  height: 2160px;
}
</style>

<style lang="scss" scoped>
// Multiple scenes styling
.scene-container-multiple {
  /* Size and position */
  top: 3.5vh;
  right: 0;
  height: calc(100% - 48px);
  width: 100vw;
  transition: all 0.5s;
  padding: 1vh 1vw;
  min-width: 1580px;
  position: absolute;
  &.open-sidebar {
    width: calc(100vw - 18vw);
  }
  /* end Size and position */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  //  1px solid hotpink;

  .subscene-container {
    //border: 3px dashed rgb(155, 155, 155); Gjort av Jørgen
    border-radius: 5px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.3);
    display: flex;
    max-height: 45vh;
    max-width: 50vw;
    width: 100%;
    height: 100%;
    overflow: auto;
    .iframe-scene-multiple {
      border-radius: 5px;
      flex-grow: 1;
      margin: 0;
      border: 0;
      padding: 0;
    }
  }
}
// Single scene styling
.scene-container-single {
  top: 3.5vh;
  right: 0;
  height: calc(100% - 48px);
  width: 100vw;
  transition: all 0.5s;
  // padding: 1vh 1vw;
  min-width: 1580px;
  position: absolute;
  border: 5px dashed rgb(155, 155, 155);
  border-radius: 5px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  &.open-sidebar {
    width: calc(100vw - 18vw);
  }
  .iframe-scene-single {
    border-radius: 5px;
    flex-grow: 1;
    margin: 0;
    border: 0;
    padding: 0;
    overflow: hidden;
  }
}
.darkmode {
  /* Size and position */
  top: 3.5vh;
  right: 0;
  height: calc(100% - 48px);
  width: 100vw;
  transition: all 0.5s;
  padding: 1vh 1vw;
  min-width: 1580px;
  position: absolute;
  background-color: #404040;
  &.open-sidebar {
    width: calc(100vw - 18vw);
  }
  /* end Size and position */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  //  1px solid hotpink;

  .subscene-container {
    // border: 3px dashed rgb(250, 248, 248);
    border-radius: 5px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.3);
    display: flex;
    max-height: 45vh;
    max-width: 50vw;
    width: 100%;
    height: 100%;
    overflow: auto;
    .iframe-scene-multiple {
      border-radius: 5px;
      flex-grow: 1;
      margin: 0;
      border: 0;
      padding: 0;
    }
  }
}
// Single scene styling
.scene-container-single {
  top: 3.5vh;
  right: 0;
  height: calc(100% - 48px);
  width: 100vw;
  transition: all 0.5s;
  // padding: 1vh 1vw;
  min-width: 1580px;
  position: absolute;
  // border: 5px dashed rgb(155, 155, 155);
  border-radius: 5px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  &.open-sidebar {
    width: calc(100vw - 18vw);
  }
  .iframe-scene-single {
    border-radius: 5px;
    flex-grow: 1;
    margin: 0;
    border: 0;
    padding: 0;
    overflow: hidden;
  }
}
</style>
