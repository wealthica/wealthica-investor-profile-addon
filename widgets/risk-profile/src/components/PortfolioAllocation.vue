<template>
  <div class="portfolio-allocation">
    <div
      v-for="allocation in allocations"
      :key="allocation.label"
      v-tooltip="tooltipConfig(allocation)"
      class="portfolio-allocation__item"
    >
      <h3 class="portfolio-allocation__item-title">
        <span class="portfolio-allocation__item-label">{{
          $t(allocation.label)
        }}</span
        >&nbsp;<span class="portfolio-allocation__item-percent">{{
          (allocation.percent / 100) | formatPercentage
        }}</span>
      </h3>
      <div class="portfolio-allocation__item-amount">
        {{
          allocation.amount
            | formatMoney({ currency: preferredCurrency, language })
        }}
      </div>
      <div class="portfolio-allocation__item-count">
        {{ allocation.cntHoldings }}
        {{ allocation.cntHoldings === 1 ? $t("holding") : $t("holdings") }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["preferredCurrency", "allocations", "language"])
  },
  methods: {
    tooltipConfig(allocation) {
      return {
        content: allocation.symbolsList,
        autoHide: false,
        offset: 10
      };
    }
  }
};
</script>

<style scoped lang="scss">
.portfolio-allocation {
  display: flex;
  justify-content: space-between;

  &__item-title {
    margin-top: 0;
    margin-bottom: 0.325rem;
    line-height: 1;
  }

  &__item-label {
    font-weight: 600;
    color: $gray-900;
    font-size: $text-2xs;
  }

  &__item-percent {
    font-weight: 400;
    color: $gray-700;
    font-size: $text-2xs;
  }

  &__item-amount {
    margin-bottom: 0.375rem;

    font-size: $text-2xs;
    font-weight: 400;
    line-height: 1;
    color: $gray-700;
  }

  &__item-count {
    font-size: $text-3xs;
    font-weight: 400;
    line-height: 1;
    color: $gray-400;
  }
}
</style>
