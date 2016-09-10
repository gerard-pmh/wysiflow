<style lang="scss">
.menu-item {
  zoom: 50%;
}
</style>

<template>
<div
  class="menu-item"
  @mousedown="dragComponent(name)">
  <leaf-component
    :name="name"
    :params="{ disabled: true }">
  </leaf-component>
</div>
</template>

<script>
import LeafComponent from './tree/LeafComponent.vue';
import selectComponent from '../vuex/actions';

export default {
  components: {
    LeafComponent,
  },
  vuex: {
    actions: {
      selectComponent,
    },
  },
  props: {
    name: {
      type: String,
    },
  },
};
</script>
