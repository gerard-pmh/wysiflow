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
  <dragged-component :name="selectedComponent" :is-dragged="isDragging"></dragged-component>
</div>
</template>

<script>
import Preview from './components/Preview.vue';
import Menu from './components/Menu.vue';
import DraggedComponent from './components/DraggedComponent';

export default {
  components: {
    Preview,
    Menu,
    DraggedComponent,
  },
  vuex: {
    getters: {
      selectedComponent: state => state.selectedComponent,
      isDragging: state => state.isDragging,
    },
  },
};
</script>
