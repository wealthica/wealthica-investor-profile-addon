<template>
  <v-stepper v-model="stepModel" vertical>
    <v-stepper-step :complete="stepModel > 1" step="1">
      Guess risk analysis of your business
    </v-stepper-step>
    <v-stepper-content step="1">
      <v-list rounded dense>
        <v-list-item-group v-model="riskAnalysisGuess" color="primary">
          <v-list-item v-for="({ title }, i) in RISKS" :key="i">
            {{ title }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-btn disabled>Prev</v-btn>
      <v-btn color="primary" @click="stepModel++">Next</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="stepModel > 2" step="2">
      Check your business status
    </v-stepper-step>
    <v-stepper-content step="2">
      <positions-table :positions="positions" />
      <v-btn @click="stepModel--">Prev</v-btn>
      <v-btn color="primary" @click="stepModel++">Next</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="stepModel > 3" step="3">
      Risk Analysis of your business
    </v-stepper-step>
    <v-stepper-content step="3">
      <risk-analysis :positions="positions" />
      <v-btn @click="stepModel--">Prev</v-btn>
      <v-btn disabled color="primary" @click="stepModel++">Next</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import { mapState } from 'vuex';

import { RISKS } from '@/constants';
import { getAddonQueryFromOptions } from '@/utils';

export default {
  components: {
    PositionsTable: () => import('./PositionsTable'),
    RiskAnalysis: () => import('./RiskAnalysis'),
  },

  data: () => ({
    stepModel: 1,
    riskAnalysisGuess: null,
    positions: [],
  }),

  computed: {
    ...mapState(['addon']),
  },

  watch: {
    stepModel(value) {
      if (value === 2 && !this.positions.length) {
        this.getPositions();
      }
    },
  },

  created() {
    this.RISKS = RISKS;
  },

  methods: {
    getPositions() {
      this.addon.addon.api
        .getPositions(getAddonQueryFromOptions(this.addon.options))
        .then(res => {
          this.positions = res;
        })
        .catch(() => this.$toastr.e('Positions Download Error'));
    },
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  margin: 0.5rem 1rem 0.5rem 1rem;
}
</style>
