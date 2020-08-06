<template>
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
</template>

<script>
import { mapGetters } from 'vuex';
import { makeChartData, analyzePositions } from '@/utils';
import { PROFILES } from '@/constants';

export default {
  components: {
    PortfolioChart: () => import('./PortfolioChart'),
    PieChart: () => import('./PieChart'),
  },

  props: {
    profileId: {
      type: Number,
      default: -1, // if -1, find nearest
    },
  },

  computed: {
    ...mapGetters(['positions']),

    portfolioProfile() {
      return analyzePositions(this.positions);
    },

    nearestProfileId() {
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

      return nearestId;
    },

    profileToVs() {
      return this.profileId + 1
        ? PROFILES[this.profileId]
        : {
            ...PROFILES[this.nearestProfileId],
            title: `Nearest Profile: ${PROFILES[this.nearestProfileId].title}`,
          };
    },
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
