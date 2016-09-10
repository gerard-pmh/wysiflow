<style lang="scss">
.wysi-checkbox {
  margin: 0.5em;
}
</style>

<template>
<div class="wysi-checkbox">
  <input type="checkbox" v-model="content" :disabled="params.disabled">
</div>
</template>

<script>
export default {
  props: {
    content: {
      type: Boolean,
      default: true,
    },
    params: {
      type: Object,
      default() {
        return {
          disabled: false,
        };
      },
    },
  },
};
</script>
