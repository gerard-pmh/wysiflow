<template>
<div>
  <node-component
    :tree="tree"
    :params="params"
    :content="content">
  </node-component>
</div>
</template>

<script>
import NodeComponent from './NodeComponent.vue';

export default {
  components: {
    NodeComponent,
  },
  data() {
    return {
      tree: [
        {
          name: 'title',
          params: {
            size: 'large',
          },
        },
        {
          name: 'title',
          params: {
            size: 'small',
          },
        },
        {
          tree: [
            {
              name: 'checkbox',
            },
            {
              name: 'title',
            },
          ],
          params: {},
        },
      ],
      params: {
        container: ['vertical'],
      },
      content: ['lala', 'lili', [false, 'le']],
    };
  },
};
</script>
