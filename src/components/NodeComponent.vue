<template>
<div
  class="wysi-node"
  :class="{'wysi-node-vertical': params.vertical}">
  <div
    v-for="node in tree"
    track-by="$index">
    <leaf-component
      v-if="node.name"
      :name="node.name"
      :params="node.params"
      :content="content[$index]">
    </leaf-component>
    <node-component
      v-else
      :tree="node.tree"
      :params="node.params"
      :content="content[$index]">
    </leaf-component>
  </div>
</div>
</template>

<script>
import NodeComponent from './NodeComponent.vue';
import LeafComponent from './LeafComponent.vue';

export default {
  name: 'node-component',
  components: {
    NodeComponent,
    LeafComponent,
  },
  props: {
    tree: {
      type: Array,
    },
    params: {
      type: Object,
    },
    content: {
      type: Array,
    },
  },
};
</script>

<style>
.wysi-node {
  border-style: solid;
  margin: 10px;
  display: flex;
}
.wysi-node-vertical {
  flex-direction: column;
}
</style>
