<template>
  <div class="chart">
    <highcharts class="chart__pie" :options="chartOptions" />
    <ChartAllocation class="chart__content" />
  </div>
</template>

<script>
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
          height: 164,
          width: 164,
          renderTo: "container",
          margin: [0, 0, 0, 0],
          spacingTop: 0,
          spacingBottom: 0,
          spacingLeft: 0,
          spacingRight: 0
        },
        credits: {
          enabled: false
        },
        title: { floating: false, text: null },
        tooltip: { enabled: false },
        plotOptions: {
          pie: {
            animation: false,
            borderWidth: 1,
            startAngle: 0,
            innerSize: "86%",
            size: 164,
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
              { y: this.allocations[0].percent, color: "#a04bda" },
              { y: this.allocations[1].percent, color: "#f59e2c" }
            ]
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.chart {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
</style>
