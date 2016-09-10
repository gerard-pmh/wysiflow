<style lang="scss">
.menu {
  min-height: 100vh;
  user-select: none;
}
</style>

<template>
<div class="menu">
  <div
    v-for="name in basicComponentNames"
    track-by="$index">
    <menu-item
      :name="name">
    </menu-item>
  </div>
</div>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
  components: {
    MenuItem,
  },
  data() {
    return {
      basicComponentNames: ['title', 'checkbox'],
    };
  },
};
</script>
