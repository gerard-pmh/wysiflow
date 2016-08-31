<style lang="scss">
.wysi-container {

  border-style: solid;
  margin: 10px;
  display: flex;

  &-vertical {
    flex-direction: column;
  }
}
</style>

<template>
<div
  class="wysi-container"
  :class="params">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    params: {
      type: Array,
      coerce(val) {
        const res = [];
        if (val) {
          for (const containerClass of val) {
            res.push(`wysi-container-${containerClass}`);
          }
        }
        return res;
      },
    },
  },
};
</script>
