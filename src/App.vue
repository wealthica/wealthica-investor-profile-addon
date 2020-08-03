<template>
  <v-app>
    <v-container>
      <portfolio-vs-nearest />
      <steppers />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
    PortfolioVsNearest: () => import('./components/PortfolioVsNearest'),
    Steppers: () => import('./components/Steppers/index'),
  },
};
</script>
