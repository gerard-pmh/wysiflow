<style lang="scss">
.menu {
  min-height: 100vh;
  user-select: none;
  &-item {
    zoom: 50%;
  }
}
</style>

<template>
<div class="menu">
  <div
    class="menu-item"
    v-for="basciComponent in basicComponents"
    track-by="$index">
    <leaf-component
      :name="basciComponent"
      :params="params">
    </leaf-component>
  </div>
</div>
</template>

<script>
import LeafComponent from './LeafComponent.vue';

export default {
  components: {
    LeafComponent,
  },
  data() {
    return {
      basicComponents: ['title', 'checkbox'],
      params: {
        disabled: true,
      },
    };
  },
};
</script>
