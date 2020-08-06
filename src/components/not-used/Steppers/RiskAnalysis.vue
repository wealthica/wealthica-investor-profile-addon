<template>
  <v-container>
    <div class="d-flex flex-wrap justify-space-around">
      <!-- <pie-chart
        :data="makeChartData(analyzedData)"
        title="Analyzed Data"
        :title-style="{ 'font-size': '30px' }"
        :chart-style="{ width: '500px' }"
      /> -->
    </div>
  </v-container>
</template>

<script>
import { makeChartData } from '@/utils';
import { mapGetters } from 'vuex';

export default {
  components: {
    // PieChart: () => import('@/components/PieChart'),
  },

  computed: {
    ...mapGetters(['positions']),
  },

  methods: {
    makeChartData,
  },
};
</script>
