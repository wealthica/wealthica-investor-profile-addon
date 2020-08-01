<template>
  <v-stepper v-model="stepModel" vertical>
    <v-stepper-step :complete="stepModel > 1" step="1">
      Guess risk analysis of your business
    </v-stepper-step>
    <v-stepper-content step="1">
      <v-card>
        <v-list rounded>
          <v-list-item-group v-model="riskAnalysisGuess" color="primary">
            <v-list-item v-for="({ title }, i) in risks" :key="i">
              {{ title }}
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <v-btn text>Prev</v-btn>
      <v-btn color="primary" @click="stepModel++">Next</v-btn>
      <v-btn color="secondary" @click="stepModel++">Skip</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="stepModel > 2" step="2">
      Check your business status
    </v-stepper-step>
    <v-stepper-content step="2">
      <v-card> </v-card>
      <v-btn text @click="stepModel--">Prev</v-btn>
      <v-btn color="primary" @click="stepModel++">Next</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="stepModel > 3" step="3">
      Risk Analysis of your business
    </v-stepper-step>
    <v-stepper-content step="3">
      <v-card> </v-card>
      <v-btn text @click="stepModel--">Prev</v-btn>
      <v-btn disabled color="primary" @click="stepModel++">Next</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import { risks } from '@/constants';

export default {
  data: () => ({
    stepModel: 1,
    riskAnalysisGuess: null,
  }),

  created() {
    this.risks = risks;
  },
};
</script>
