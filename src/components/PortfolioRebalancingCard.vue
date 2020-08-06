<template>
  <v-card>
    <h2>Portfolio Rebalancing</h2>
    <v-data-table
      :headers="HEADERS"
      :items="tableItems"
      hide-default-footer
      class="table mx-auto"
    />
  </v-card>
</template>

<script>
import { portfolioAllocations } from '@/mixins/portfolioAllocations';
import { LABELS } from '@/constants';

const HEADERS = [
  { text: 'CLASS', value: 'class', sortable: false },
  { text: 'CURRENT', value: 'current', sortable: false },
  { text: 'TARGET', value: 'target', sortable: false },
  { text: 'REBALANCING', value: 'rebalancing', sortable: false },
];

export default {
  mixins: [portfolioAllocations],

  props: ['profile'],

  computed: {
    tableItems() {
      let res = [0, 1].map(i => ({
        class: LABELS[i],
        current: Math.round(this.allocations[i].percent) + '%',
        target: this.profile ? this.profile.data[i] + '%' : '',
        rebalancing: '',
      }));

      res[0].rebalancing =
        res[0].current === res[0].target
          ? "You're on target!"
          : 'You need rebalancing';

      return res;
    },
  },

  created() {
    this.HEADERS = HEADERS;
  },
};
</script>
