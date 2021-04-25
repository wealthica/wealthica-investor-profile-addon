<template>
  <div class="parent">
    <highcharts :options="chartOptions" />
    <ChartAllocation />
  </div>
</template>

<script>
import { THEME } from "@/constants";
import { mapGetters } from "vuex";
import ChartAllocation from "./ChartAllocation.vue";

export default {
  components: { ChartAllocation },
  computed: {
    ...mapGetters(["allocations"]),
    chartOptions() {
      return {
        chart: {
          type: "pie",
          height: 288,
          width: 288
        },
        credits: {
          enabled: false
        },
        title: { floating: true, text: null },
        tooltip: { enabled: false },
        plotOptions: {
          pie: {
            borderWidth: 1,
            startAngle: 0,
            innerSize: "85%",
            size: "100%",
            dataLabels: false,
            stickyTracking: false,
            states: {
              hover: {
                enabled: false
              }
            }
          }
        },
        series: [
          {
            enableMouseTracking: false,
            data: [
              { y: this.allocations[0].percent, color: THEME.primary },
              { y: this.allocations[1].percent, color: THEME.secondary }
            ]
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 116px;
  left: 50%;
  transform: translateX(-50%);
}

.font-larger {
  font-size: larger;
}
</style>
