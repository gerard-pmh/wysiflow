<style lang="scss">
.menu-item {
  zoom: 50%;
}
</style>

<template>
<div
  class="menu-item"
  @click="selectComponent(name)"
  @mousedown="dragComponent(name)">
  <leaf-component
    :name="name"
    :params="{ disabled: true }">
  </leaf-component>
</div>
</template>

<script>
import LeafComponent from './tree/LeafComponent.vue';
import { selectComponent, dragComponent } from '../vuex/actions';

export default {
  components: {
    LeafComponent,
  },
  vuex: {
    actions: {
      selectComponent,
      dragComponent,
    },
  },
  props: {
    name: {
      type: String,
    },
  },
};
</script>
