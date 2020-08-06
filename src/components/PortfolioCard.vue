<template>
  <v-card>
    <h2>Portfolio Allocation</h2>

    <v-row>
      <v-col cols="6">
        <pie-chart />
      </v-col>

      <v-col cols="6">
        <div class="d-flex flex-column">
          <div v-for="(allocation, i) in allocations" :key="i">
            <h2>
              <b>{{ allocation.label }}{{ ' ' }}</b>
              {{ allocation.percent }}%
            </h2>
            <p>${{ allocation.amount }}</p>
            <p>{{ allocation.cntHoldings }} Holdings</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { portfolioAllocations } from '@/mixins/portfolioAllocations';

export default {
  components: {
    PieChart: () => import('./PieChart'),
  },

  mixins: [portfolioAllocations],
};
</script>
