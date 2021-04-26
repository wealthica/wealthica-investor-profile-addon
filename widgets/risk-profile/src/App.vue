<template>
  <div class="app">
    <div v-if="positions.length && !loading">
      <PieChart />
      <PortfolioAllocation />
    </div>
    <div v-else-if="loading" class="app__loading">
      <img class="app__loading-icon" src="~@/assets/svg/loading.svg" alt="" />
      <p class="app__loading-title">{{ $t("loading") }}</p>
    </div>
    <div v-else class="app__no-positions">
      {{ $t("no_positions_found") }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PortfolioAllocation from "@/components/PortfolioAllocation.vue";
import PieChart from "@/components/PieChart.vue";

export default {
  name: "App",
  components: {
    PortfolioAllocation,
    PieChart
  },
  computed: {
    ...mapGetters(["positions", "loading"])
  }
};
</script>
<style scoped lang="scss">
.app {
  &__loading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 12.5rem;
  }

  &__loading-icon {
    width: 3rem;
    height: 3rem;
  }

  &__loading-title {
    margin: 0;
    font-weight: 400;
    color: $gray-400;
    font-size: $text-xs;
  }
}
</style>

<style lang="scss">
body {
  margin: 0;
  font-family: Inter, Helvetica Neue, Arial, Helvetica, sans-serif;
  min-width: 0;
  line-height: 1.4285em;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 0 5px 7px 5px rgba(100, 100, 100, 0.1) !important;
}

.tooltip {
  z-index: 1000;

  pointer-events: auto;

  .tooltip-inner {
    font-family: $font-family;
    font-size: $text-2xs !important;
    line-height: 1.4285em;
    background: white;
    padding: 0.833em 1em;
    font-weight: 400;
    font-style: normal;
    color: rgba(0, 0, 0, 0.87);
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
      0 2px 10px 0 rgba(34, 36, 38, 0.15);
    max-width: 265px !important;
    text-align: left;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: white;
  }

  &[x-placement^="top"] {
    .tooltip-arrow {
      border-width: 0.625rem 0.625rem 0 0.625rem;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
      bottom: -0.625rem;
    }
  }

  &[x-placement^="bottom"] {
    .tooltip-arrow {
      border-width: 0 0.625rem 0.625rem 0.625rem;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -0.625rem;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    .tooltip-arrow {
      border-width: 0.625rem 0.625rem 0.625rem 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -0.625rem;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    .tooltip-arrow {
      border-width: 0.625rem 0 0.625rem 0.625rem;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -0.625rem;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden="true"] {
    visibility: hidden;
    opacity: 0;

    &:not(.no-transition) {
      transition: opacity 0.15s, visibility 0.15s;
    }
  }

  &[aria-hidden="false"] {
    visibility: visible;
    opacity: 1;

    &:not(.no-transition) {
      transition: opacity 0.15s;
    }
  }

  &.info {
    $color: rgba(#004499, 0.9);

    .tooltip-inner {
      background: $color;
      color: white;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, 0.1);
      max-width: 300px;
    }

    .tooltip-arrow {
      border-color: $color;
    }
  }

  &.tooltip-loading {
    .tooltip-inner {
      color: #77aaff;
    }
  }
}
</style>
