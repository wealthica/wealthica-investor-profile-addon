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

  mounted() {
    this.renderChart(this.data, {
      borderWidth: '10px',
      hoverBorderWidth: '10px',
    });
  },
};
