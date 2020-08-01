<template>
  <v-container>
    <v-card class="py-3">
      <h2 class="text-center mb-3">Risk Charts</h2>
      <div class="d-flex flex-wrap justify-space-around">
        <pie-chart
          v-for="(item, i) in risks"
          :key="`chart-${i}`"
          :data="makeChartData(item.data)"
          :title="item.title"
        />
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { labels, risks } from '@/constants';

export default {
  components: {
    PieChart: () => import('./PieChart'),
  },

  created() {
    this.risks = risks;
  },

  methods: {
    makeChartData(data) {
      return {
        labels,
        datasets: [
          {
            backgroundColor: ['#00D8FF', '#E46651'],
            data,
          },
        ],
      };
    },
  },
};
</script>
