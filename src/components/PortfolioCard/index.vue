<template>
  <v-card class="my-card pa-5 grey--text text--darken-3">
    <h3>{{ $t("portfolio_allocation") }}</h3>

    <div class="d-flex align-center flex-wrap">
      <div class="mr-5 piechart-wrapper">
        <pie-chart />
      </div>
      <div class="d-flex flex-column ">
        <div
          v-for="(allocation, i) in allocations"
          :key="i"
          :class="{ 'mb-3': !i }"
        >
          <p class="label">
            <b>{{ allocation.label }}{{ " " }}</b>
            {{ allocation.percent }}%
          </p>
          <p class="amount">
            {{
              allocation.amount | formatMoney({ currency: preferredCurrency })
            }}
          </p>
          <p class="grey--text holdings">
            {{ allocation.cntHoldings }}
            {{ allocation.cntHoldings === 1 ? $t("holding") : $t("holdings") }}
          </p>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import portfolioAllocations from "@/mixins/portfolioAllocations";
import { mapGetters } from "vuex";

export default {
  components: {
    PieChart: () => import("./PieChart")
  },
  mixins: [portfolioAllocations],
  computed: {
    ...mapGetters(["preferredCurrency"])
  }
};
</script>

<style lang="scss" scoped>
.piechart-wrapper {
  margin-left: -20px;
}

p {
  margin: 0;

  &.label {
    font-size: large;
  }

  &.amount {
    font-size: medium;
  }

  &.holdings {
    font-size: smaller;
  }
}
</style>
