<template>
  <v-card class="portfolio-card my-card pa-5 grey--text text--darken-3">
    <h3>{{ $t("portfolio_allocation") }}</h3>

    <div class="d-flex align-center flex-wrap">
      <div class="mr-5 piechart-wrapper">
        <pie-chart />
      </div>
      <div class="d-flex flex-column ">
        <div
          v-for="(allocation, i) in allocations"
          :key="i"
          v-tooltip="{
            content: allocation.symbolsList,
            autoHide: false,
            offset: 10
          }"
          :class="{ 'mb-3': !i }"
        >
          <p class="label">
            <b>{{ $t(allocation.label) }}{{ " " }}</b>
            {{ (allocation.percent / 100) | formatPercentage }}
          </p>
          <p class="amount">
            {{
              allocation.amount
                | formatMoney({ currency: preferredCurrency, language })
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
import { mapGetters } from "vuex";

export default {
  components: {
    PieChart: () => import("./PieChart")
  },
  computed: {
    ...mapGetters(["preferredCurrency", "allocations", "language"])
  }
};
</script>

<style lang="scss" scoped>
.portfolio-card {
  height: 100%;
}

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
