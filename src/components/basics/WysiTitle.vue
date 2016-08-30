<template>
<div class="">
  <h1 v-if="params.size === 'large'">{{content}}</h1>
  <h2 v-if="params.size === 'medium'">{{content}}</h2>
  <h3 v-if="params.size === 'small'">{{content}}</h3>
</div>
</template>

<script>
export default {
  props: {
    params: {
      type: Object,
      default() {
        return {
          size: 'medium',
        };
      },
    },
    content: {
      type: String,
      default: 'Title',
    },
  },
};
</script>
