<style lang="scss">
.dragged-component {
  position: absolute;
}
</style>

<template>
<div
  class="dragged-component"
  v-show="dragged"
  @mouseup="deselectComponent(basicComponent)"
  @mousemove="">
  <leaf-component
    :name="basicComponent"
    :params="{ disabled: true }">
  </leaf-component>
</div>
</template>

<script>
import LeafComponent from './tree/LeafComponent.vue';
import deselectComponent from '../vuex/actions';

export default {
  components: {
    LeafComponent,
  },
  vuex: {
    getters: {

    },
    actions: {
      deselectComponent,
    },
  },
  props: {
    basicComponent: {
      type: String,
    },
  },
};
</script>
