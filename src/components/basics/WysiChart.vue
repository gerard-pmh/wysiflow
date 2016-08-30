<template>
<div>
  <canvas
    v-el:ctx
    width="300"
    height="300">
  </canvas>
</div>
</template>

<script>

/* eslint-disable no-unused-vars */
import Chart from 'chart.js';

export default {
  props: {
    // params: {
    //   type: Object,
    //   default() {
    //     return {
    //       width: 300,
    //       height: 300,
    //     };
    //   },
    // },
    // content: {
    //   type: Object,
    // },
  },
  data() {
    return {
      chart: {},
      chartParameters: {
        type: 'bars',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
            }],
          },
        },
      },
    };
  },
  ready() {
    /* eslint-disable no-unused-vars */
    this.chart = new Chart(
      this.$els.ctx,
      this.chartParameters
    );
  },
};
</script>
