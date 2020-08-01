<template>
  <v-container>
    <div class="d-flex flex-wrap justify-space-around">
      <v-data-table
        :headers="HEADERS"
        :items="tableItems"
        :items-per-page="5"
        hide-default-footer
        class="table"
      />
      <pie-chart :data="makeChartData(analyzedData)" title="Analyzed Data" />
    </div>
    <p
      aria-label="description"
      class="purple--text text--lighten-1 text-center description"
    >
      Cash is considered as fixed income. Tangible assets are ignored.
    </p>
  </v-container>
</template>

<script>
import { makeChartData } from '@/utils';
import { LABELS } from '@/constants';

const HEADERS = [
  { text: 'Class', value: 'label' },
  { text: 'Net Value', value: 'net' },
  { text: 'Percent', value: 'percent' },
];

export default {
  components: {
    PieChart: () => import('@/components/PieChart'),
  },

  props: ['positions'],

  computed: {
    /**
     * @return [bonds, equities]
     */
    analyzedData() {
      let data = [0, 0];
      this.positions.forEach(position => {
        const i = position.class === 'equity' ? 1 : 0;
        data[i] += position.value;
      });

      return data;
    },

    tableItems() {
      const total = this.analyzedData.reduce((prev, cur) => prev + cur, 0);
      return LABELS.map((label, i) => ({
        label,
        net: this.analyzedData[i],
        percent: ((100 * this.analyzedData[i]) / total).toFixed(2) + '%',
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
