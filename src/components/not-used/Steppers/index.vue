<template>
  <v-stepper v-model="stepModel" vertical>
    <v-stepper-step :complete="stepModel > 1" step="1">
      What kind of investor are you?
    </v-stepper-step>
    <v-stepper-content step="1">
      <v-list rounded dense>
        <v-list-item-group v-model="chosenProfileId" color="primary">
          <v-list-item v-for="({ title, data }, i) in PROFILES" :key="i">
            <span class="item-title">{{ title }}</span>
            (
            <span class="item-bonds">{{ LABELS[0] }}:{{ data[0] }}%</span>
            <span class="item-equities">{{ LABELS[1] }}:{{ data[1] }}%</span>
            )
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-btn color="secondary" disabled>Prev</v-btn>
      <v-btn color="primary" @click="stepModel++">Next</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="stepModel > 2" step="2">
      Comparison of your portfolio vs chosen profile
    </v-stepper-step>
    <v-stepper-content step="2">
      <v-row>
        <v-col cols="6">
          <portfolio-chart />
        </v-col>
        <v-col cols="6">
          <pie-chart
            :data="makeChartData(PROFILES[chosenProfileId].data)"
            :title="PROFILES[chosenProfileId].title"
          />
        </v-col>
      </v-row>
      <v-btn color="secondary" @click="stepModel--">Prev</v-btn>
      <v-btn disabled color="primary" @click="stepModel++">Next</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import { makeChartData } from '@/utils';
import { PROFILES, LABELS } from '@/constants';

export default {
  components: {
    PortfolioChart: () => import('../PortfolioChart'),
    PieChart: () => import('../PieChart'),
  },

  data: () => ({
    stepModel: 1,
    chosenProfileId: 0,
  }),

  created() {
    this.PROFILES = PROFILES;
    this.LABELS = LABELS;
  },

  methods: {
    makeChartData,
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  margin: 0.5rem 1rem 0.5rem 1rem;
}
.item-title {
  width: 130px;
}
.item-bonds {
  width: 100px;
}
</style>
