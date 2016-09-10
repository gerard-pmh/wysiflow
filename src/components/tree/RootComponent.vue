<template>
<div>
  <node-component
    :tree="wysiApp.tree"
    :params="wysiApp.params"
    :content="wysiApp.content">
  </node-component>
</div>
</template>

<script>
import NodeComponent from './NodeComponent.vue';

export default {
  components: {
    NodeComponent,
  },
  props: {
    wysiApp: {
      type: Object,
    },
  },
};
</script>
