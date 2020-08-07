<template>
  <v-card class="pa-5">
    <h2>Portfolio Allocation</h2>

    <div class="d-flex align-center flex-wrap">
      <div class="mr-5 piechart-wrapper">
        <pie-chart />
      </div>
      <div class="d-flex flex-column">
        <div
          v-for="(allocation, i) in allocations"
          :key="i"
          :class="{ 'mb-3': !i }"
        >
          <p class="label">
            <b>{{ allocation.label }}{{ ' ' }}</b>
            {{ allocation.percent.toFixed(2) }}%
          </p>
          <p class="amount">${{ allocation.amount.toFixed(2) }}</p>
          <p class="grey--text holdings">
            {{ allocation.cntHoldings }} Holdings
          </p>
        </div>
      </div>
    </div>
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

<style lang="scss" scoped>
.piechart-wrapper {
  margin-left: -20px;
}
p {
  margin: 0;
  &.label {
    font-size: larger;
  }
  &.amount {
    font-size: medium;
  }
  &.holdings {
    font-size: smaller;
  }
}
</style>
