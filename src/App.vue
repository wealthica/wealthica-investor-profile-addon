<template>
  <v-app>
    <risk-charts />
    <steppers />
  </v-app>
</template>

<script>
// import { Addon } from '@wealthica/wealthica.js';

export default {
  name: 'App',

  components: {
    RiskCharts: () => import('./components/RiskCharts'),
    Steppers: () => import('./components/Steppers'),
  },

  data: () => ({
    // addon: null,
    // addonOptions: null,
    // transactions: [],
  }),

  // mounted() {
  //   this.addon = new Addon();

  //   this.addon
  //     .on('init', options => {
  //       console.log('options', options);
  //       this.addonOptions = options;
  //     })
  //     .on('update', options => {
  //       console.log('options', options);
  //       this.addonOptions = options;
  //     });
  // },

  // methods: {
  //   addTransaction() {
  //     this.addon
  //       .addTransaction({ description: 'some description' })
  //       .then(newTrasaction => {
  //         if (newTrasaction) {
  //           console.log('new transaction', newTrasaction);
  //         } else {
  //           console.log('no new transaction');
  //         }
  //       })
  //       .catch(err => {
  //         console.log('error', err);
  //       });
  //   },
  //   getTransaction() {
  //     this.addon.api
  //       .getTransactions(getQueryFromOptions(this.addonOptions))
  //       .then(res => (this.transactions = res));
  //   },
  // },
};

// const getQueryFromOptions = options => ({
//   from: options.dateRangeFilter && options.dateRangeFilter[0],
//   to: options.dateRangeFilter && options.dateRangeFilter[1],
//   groups: options.groupsFilter,
//   institutions: options.institutionsFilter,
//   investments:
//     options.investmentsFilter === 'all' ? null : options.investmentsFilter,
// });
</script>

<style>
.container {
  width: 200px;
  /* height: 300px; */
}
</style>
