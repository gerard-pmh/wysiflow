<style>
.preview {
  float: left;
  width: 70%;
  min-height: 100vh;
}
</style>

<template>
<div class="preview">
  <root-component :wysi-app="wysiApp">
</div>
</template>

<script>
import RootComponent from './tree/RootComponent.vue';

export default {
  components: {
    RootComponent,
  },
  data() {
    return {
      wysiApp: {
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
      },
    };
  },
};
</script>
