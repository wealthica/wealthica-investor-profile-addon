<template>
  <div id="app">
    <button @click="getTransaction">Transactions</button>
    <ul>
      <li v-for="(transaction, i) in transactions" :key="i">
        {{ transaction.description }}
      </li>
    </ul>
  </div>
</template>

<script>
import Addon from '@wealthica/wealthica.js';

export default {
  name: 'App',

  data: () => ({
    addon: null,
    addonOptions: null,
    transactions: [],
  }),

  mounted() {
    this.addon = new Addon();

    this.addon
      .on('init', options => {
        console.log('options', options);
        this.addonOptions = options;
      })
      .on('update', options => {
        console.log('options', options);
        this.addonOptions = options;
      });
  },

  methods: {
    getTransaction() {
      this.addon.api.getTransactions(getQueryFromOptions(this.addonOptions))
        .then(res => this.transactions = res);
    },
  },
};

const getQueryFromOptions = options => ({
  from: options.dateRangeFilter && options.dateRangeFilter[0],
  to: options.dateRangeFilter && options.dateRangeFilter[1],
  groups: options.groupsFilter,
  institutions: options.institutionsFilter,
  investments:
    options.investmentsFilter === 'all' ? null : options.investmentsFilter,
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
