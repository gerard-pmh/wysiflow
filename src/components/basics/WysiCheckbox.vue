<style lang="scss">
.wysi-checkbox {
  margin: 0.5em;
}
</style>

<template>
<div class="wysi-checkbox">
  <input type="checkbox" v-model="content">
</div>
</template>

<script>
export default {
  props: {
    content: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
