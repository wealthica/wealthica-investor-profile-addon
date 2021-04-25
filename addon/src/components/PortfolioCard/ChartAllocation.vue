<template>
  <div class="chart-allocation">
    <div
      v-for="allocation in allocations"
      :key="allocation.label"
      v-tooltip="tooltipConfig(allocation)"
      class="chart-allocation__item"
      :class="`mod_${allocation.label}`"
    >
      <div class="chart-allocation__item-percent">
        {{ (allocation.percent / 100) | formatPercentage({ round: true }) }}
      </div>
      <div class="chart-allocation__item-name">{{ $t(allocation.label) }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["allocations"])
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
.chart-allocation {
  position: absolute;
  top: 7.5rem;
  left: 50%;
  transform: translateX(-50%);

  display: flex;

  &__item {
    width: 5.5rem;
    padding: 0 0.25rem;

    text-align: center;

    &.mod_bonds {
      color: $purple-400;
    }

    &.mod_equities {
      color: $orange-400;
    }
  }

  &__item-percent {
    margin-bottom: 0.5rem;

    font-size: $text-lg;
    font-weight: 600;
    line-height: 1;
  }

  &__item-name {
    font-size: $text-xs;
    color: $gray-400;
    line-height: 1;
  }
}
</style>
