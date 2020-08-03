<template>
  <v-card>
    <v-row class="pa-5">
      <v-col cols="6">
        <portfolio-chart />
      </v-col>
      <v-col cols="6">
        <pie-chart
          :data="makeChartData(nearestProfile.data)"
          :title="`Nearest Profile - ${nearestProfile.title}`"
        />
      </v-col>
    </v-row>
    <div class="mt-4">
      <h2 class="text-center">Analysis of your Portfolio</h2>
      <v-data-table
        :headers="HEADERS"
        :items="tableItems"
        hide-default-footer
        class="table mx-auto"
      />
    </div>
    <p
      aria-label="description"
      class="purple--text text--lighten-1 text-center description my-3"
    >
      Cash is considered as fixed income. Tangible assets are ignored.
    </p>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { makeChartData, analyzePositions } from '@/utils';
import { PROFILES, LABELS } from '@/constants';

const HEADERS = [
  { text: 'Class', value: 'label' },
  { text: 'Net Value', value: 'net' },
  { text: 'Percent', value: 'percent' },
];

export default {
  components: {
    PortfolioChart: () => import('./PortfolioChart'),
    PieChart: () => import('./PieChart'),
  },

  computed: {
    ...mapGetters(['positions']),

    portfolioProfile() {
      return analyzePositions(this.positions);
    },

    nearestProfile() {
      let nearestId = 0,
        nearestRatio = 0;

      /**
       * algorithm:
       * a / b ~ c / d <=>
       * <=> a * d ~ b * c <=>
       * <=> min(left, right) / max(left, right) ~ 1, maximum
       */
      PROFILES.forEach(({ data }, i) => {
        const t = [
          data[0] * this.portfolioProfile[1],
          data[1] * this.portfolioProfile[0],
        ];
        const ratio = Math.min(...t) / Math.max(...t);
        if (nearestRatio < ratio) {
          nearestId = i;
          nearestRatio = ratio;
        }
      });

      return PROFILES[nearestId];
    },

    tableItems() {
      const total = this.portfolioProfile.reduce((prev, cur) => prev + cur, 0);
      return LABELS.map((label, i) => ({
        label,
        net: '$' + this.portfolioProfile[i],
        percent: ((100 * this.portfolioProfile[i]) / total).toFixed(2) + '%',
      }));
    },
  },

  created() {
    this.HEADERS = HEADERS;
  },

  methods: {
    makeChartData,
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 350px;
}

.description {
  font-size: larger;
}
</style>
