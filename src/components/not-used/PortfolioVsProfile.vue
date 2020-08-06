<template>
  <div>
    <portfolio-vs-profile-chart :profile-id="profileId" />

    <v-radio-group v-model="radioGroup">
      <v-radio label="Find nearest profile" :value="0" />
      <v-radio label="What kind of investor are you?" :value="1" />
    </v-radio-group>

    <v-slider
      v-model="chosenProfileId"
      :disabled="!radioGroup"
      :tick-labels="profileTitles"
      :max="profileTitles.length - 1"
      step="1"
      ticks="always"
      tick-size="4"
    />
  </div>
</template>

<script>
import { PROFILES } from '@/constants';

export default {
  components: {
    PortfolioVsProfileChart: () => import('./PortfolioVsProfileChart'),
  },

  data: () => ({
    radioGroup: 0,
    chosenProfileId: 0,
  }),

  computed: {
    profileTitles() {
      return PROFILES.map(({ title }) => title);
    },

    profileId() {
      return this.radioGroup ? this.chosenProfileId : -1;
    },
  },
};
</script>
