<template>
  <v-app>
    <v-container>
      <risk-charts />
      <steppers />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
    RiskCharts: () => import('./components/RiskCharts'),
    Steppers: () => import('./components/Steppers/index'),
  },
};
</script>
