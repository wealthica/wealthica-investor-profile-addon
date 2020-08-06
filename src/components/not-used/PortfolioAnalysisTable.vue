<template>
  <div class="mt-4">
    <h2 class="text-center">Analysis of your Portfolio</h2>
    <v-data-table
      :headers="HEADERS"
      :items="tableItems"
      hide-default-footer
      class="table mx-auto"
    />
    <div
      aria-label="description"
      class="purple--text text--lighten-1 text-center description my-3"
    >
      <p>Only Positions information is considered.</p>
      <p>Cash is considered as fixed</p>
      <p>income. Tangible assets are ignored.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { analyzePositions } from '@/utils';
import { LABELS } from '@/constants';

const HEADERS = [
  { text: 'Class', value: 'label' },
  { text: 'Net Value', value: 'net' },
  { text: 'Percent', value: 'percent' },
];

export default {
  computed: {
    ...mapGetters(['positions']),

    portfolioProfile() {
      return analyzePositions(this.positions);
    },

    tableItems() {
      const total = this.portfolioProfile.reduce((prev, cur) => prev + cur, 0);
      return LABELS.map((label, i) => ({
        label,
        net: '$' + this.portfolioProfile[i].toFixed(2),
        percent: ((100 * this.portfolioProfile[i]) / total).toFixed(1) + '%',
      }));
    },
  },

  created() {
    this.HEADERS = HEADERS;
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 350px;
}
</style>
