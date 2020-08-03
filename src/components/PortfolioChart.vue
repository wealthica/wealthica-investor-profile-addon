<template>
  <pie-chart
    :data="makeChartData(analyzePositions(positions))"
    title="Portfolio"
    v-bind="$attrs"
  />
</template>

<script>
import { makeChartData, analyzePositions } from '@/utils';
import { mapGetters } from 'vuex';

export default {
  components: {
    PieChart: () => import('./PieChart'),
  },

  computed: {
    ...mapGetters(['positions']),
  },

  methods: {
    makeChartData,
    analyzePositions,
  },
};
</script>
