import { Doughnut } from 'vue-chartjs';

export default {
  extends: Doughnut,

  props: {
    data: {
      type: Object,
    },
    options: {
      type: Object,
      default: () => ({
        hoverBorderWidth: 20,
      }),
    },
  },

  watch: {
    data: {
      handler: 'drawChart',
      deep: true,
    },
    options: {
      handler: 'drawChart',
      deep: true,
    },
  },

  mounted() {
    this.drawChart();
  },

  methods: {
    drawChart() {
      this.renderChart(this.data, {
        borderWidth: '10px',
        hoverBorderWidth: '10px',
      });
    },
  },
};
