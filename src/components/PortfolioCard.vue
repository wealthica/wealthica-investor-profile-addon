<template>
  <v-card>
    <h2 class="pa-3">Portfolio Allocation</h2>

    <div class="d-flex align-center flex-wrap">
      <div>
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
