<style lang="scss">
.dragged-component {
  position: absolute;
}
</style>

<template>
<div
  class="dragged-component"
  v-show="isDragged"
  @mouseup="dropComponent"
  @mousemove="moveComponent">
  <leaf-component
    :name="name"
    :params="{ disabled: true }">
  </leaf-component>
</div>
</template>

<script>
import LeafComponent from './tree/LeafComponent.vue';
import { dropComponent } from '../vuex/actions';

export default {
  components: {
    LeafComponent,
  },
  vuex: {
    actions: {
      dropComponent,
    },
  },
  props: {
    name: {
      type: String,
    },
    isDragged: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    moveComponent(event) {
      if (this.isDragged) {
        this.$el.style.left = event.clientX;
        this.$el.style.top = event.clientY;
      }
    },
  },
};
</script>
