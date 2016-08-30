<template>
<div>
  <root-component></root-component>
</div>
</template>

<script>
import RootComponent from './components/RootComponent';

export default {
  components: {
    RootComponent,
  },
};
</script>

<style lang="scss">
@import "~normalize.css";
@import "~animate.css";
$fa-font-path: "~font-awesome/fonts";
@import "~font-awesome/scss/font-awesome.scss";

body {
  background: black;
  color: white;
}
</style>
