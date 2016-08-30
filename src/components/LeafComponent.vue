<template>
<div>
  <component
    :is="'wysi-' + name"
    :params="params"
    :content="content">
  </component>
</div>
</template>

<script>
import WysiTitle from './basics/WysiTitle.vue';
import WysiCheckbox from './basics/WysiCheckbox.vue';
import WysiChart from './basics/WysiChart.vue';

export default {
  components: {
    WysiTitle,
    WysiCheckbox,
    WysiChart,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    params: {
      type: Object,
    },
    content: [Object, Array, String, Number],
  },
};
</script>
