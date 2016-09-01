<style>
.menu {
  min-height: 100vh;
}
</style>

<template>
<div class="menu">
  <div v-for="basciComponent in basicComponents" track-by="$index">
    <leaf-component :name="basciComponent"></leaf-component>
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
    };
  },
};
</script>
