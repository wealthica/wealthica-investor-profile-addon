<template>
  <v-card class="pa-5 grey--text text--darken-3">
    <h3 class="grey--text text--darken-3">Portfolio Rebalancing</h3>

    <v-data-table
      :headers="HEADERS"
      :items="tableItems"
      hide-default-footer
      class="my-table mx-10 my-5"
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

<style lang="scss">
.my-table > .v-data-table__wrapper > table > .v-data-table-header {
  background-color: #f7f8fc !important;
}

.my-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td {
  color: #333 !important;
}

.my-table > .v-data-table__wrapper > table > thead > tr > th {
  color: #333 !important;
}
</style>
