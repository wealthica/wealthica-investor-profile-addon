<template>
  <div class="piechart">
    <p v-if="title" class="text-center mb-1">
      <b>{{ title }}</b>
    </p>
    <pie-chart v-bind="$attrs" />
  </div>
</template>

<script>
/**
 * example of $attrs:
 * {
 *   labels: ['Bonds', 'Equities'],
 *   datasets: [
 *     {
 *       backgroundColor: [color1, color2],
 *       data: [bondsValue, equitiesValue],
 *     },
 *   ],
 * }
 */
export default {
  components: {
    PieChart: () => import('./PieChart'),
  },
  props: ['title'],
};
</script>

<style lang="scss" scoped>
.piechart {
  width: 150px;
}
</style>
