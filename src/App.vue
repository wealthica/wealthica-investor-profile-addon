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
    Steppers: () => import('./components/Steppers/index'),
  },
};
</script>

<style>
.container {
  width: 200px;
  /* height: 300px; */
}
</style>
