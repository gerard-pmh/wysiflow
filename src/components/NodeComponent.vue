<template>
<container :params="params.container">
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
</container>
</template>

<script>
import Container from './Container.vue';
import NodeComponent from './NodeComponent.vue';
import LeafComponent from './LeafComponent.vue';

export default {
  name: 'node-component',
  components: {
    Container,
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
