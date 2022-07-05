<template>
  <div>
    <MainDisplay :darkMode="darkMode" />
  </div>
</template>

<script lang="ts">
import MainDisplay from "../components/MainDisplay.vue";
export default {
  components: {
    MainDisplay,
  },
};
</script>

<style lang="scss"></style>
