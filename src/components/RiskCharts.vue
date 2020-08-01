<template>
  <v-card class="py-3 my-4">
    <h2 class="text-center mb-3">Risk Charts</h2>
    <div class="d-flex flex-wrap justify-space-around">
      <pie-chart
        v-for="(item, i) in RISKS"
        :key="`chart-${i}`"
        :data="makeChartData(item.data)"
        :title="item.title"
      />
    </div>
  </v-card>
</template>

<script>
import { RISKS } from '@/constants';
import { makeChartData } from '@/utils';

export default {
  components: {
    PieChart: () => import('./PieChart'),
  },

  created() {
    this.RISKS = RISKS;
  },

  methods: {
    makeChartData,
  },
};
</script>
