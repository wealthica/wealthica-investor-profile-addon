<template>
  <div class="piechart">
    <p
      v-if="title"
      aria-label="piechart-title"
      class="text-center mb-1"
      :style="titleStyle"
    >
      <b>{{ title }}</b>
    </p>
    <pie-chart
      aria-label="piechart"
      :style="chartStyle"
      class="piechart"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
/**
 * example of $attrs:
 * {
 *   data: {
 *     labels: ['Bonds', 'Equities'],
 *     datasets: [
 *       {
 *         backgroundColor: [color1, color2],
 *         data: [bondsValue, equitiesValue],
 *       },
 *     ],
 *   }
 * }
 */
export default {
  components: {
    PieChart: () => import('./PieChart'),
  },

  props: {
    title: {
      type: String,
      default: 'Chart',
    },
    titleStyle: {
      type: Object,
      default: () => ({ 'font-size': '20px' }),
    },
    chartStyle: {
      type: Object,
      default: () => ({ width: '100%' }),
    },
  },
};
</script>

<style lang="scss" scoped>
.piechart {
  max-width: 100%;
}
</style>
