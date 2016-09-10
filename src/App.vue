<style lang="scss">
@import "~normalize.css";
@import "~animate.css";
$roboto-font-path: "~roboto-fontface/fonts";
@import "~roboto-fontface/css/roboto/sass/roboto-fontface-black.scss";
$fa-font-path: "~font-awesome/fonts";
@import "~font-awesome/scss/font-awesome.scss";

body {
  background: brown;
  color: white;
  font-family: "Roboto";
}
</style>

<template>
<div class="app">
  <preview></preview>
  <menu></menu>
</div>
</template>

<script>
import Preview from './components/Preview.vue';
import Menu from './components/Menu.vue';

export default {
  components: {
    Preview,
    Menu,
  },
};
</script>
