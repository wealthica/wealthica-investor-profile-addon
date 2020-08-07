<template>
  <div class="parent">
    <highcharts :options="chartOptions" />
    <div class="child d-flex flex-wrap">
      <div class="d-flex flex-column align-center mr-10">
        <div class="primary--text text-h5">
          {{ Math.round(allocations[0].percent) }}
        </div>
        <div class="grey--text">Bonds</div>
      </div>
      <div class="d-flex flex-column align-center">
        <div class="secondary--text text-h5">
          {{ Math.round(allocations[1].percent) }}
        </div>
        <div class="grey--text">Equities</div>
      </div>
    </div>
  </div>
</template>

<script>
import { portfolioAllocations } from '@/mixins/portfolioAllocations';
import { THEME } from '@/constants';

export default {
  mixins: [portfolioAllocations],

  computed: {
    chartOptions() {
      return {
        chart: {
          type: 'pie',
          height: 300,
          width: 300,
        },
        credits: {
          enabled: false,
        },
        title: false,
        tooltip: false,
        plotOptions: {
          pie: {
            borderWidth: 1,
            startAngle: 0,
            innerSize: '85%',
            size: '100%',
            dataLabels: false,
            stickyTracking: false,
            states: {
              hover: {
                enabled: false,
              },
            },
          },
        },
        series: [
          {
            data: [
              { y: this.allocations[0].percent, color: THEME.primary },
              { y: this.allocations[1].percent, color: THEME.secondary },
            ],
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.parent {
  position: relative;
}

.child {
  position: absolute;
  left: 85px;
  top: 120px;
}

.font-larger {
  font-size: larger;
}
</style>
