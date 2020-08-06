<template>
  <div>
    <profile-how-selector
      :profile-how-selected-id.sync="profileHowSelectedId"
    />
    <v-slider
      v-model="chosenProfileId"
      :disabled="profileHowSelectedId !== PROFILE_CHOOSE_ID"
      :trick-labels="profileTitles"
      :max="profileTitles.length - 1"
      step="1"
      ticks="always"
      tick-size="4"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { portfolioAllocations } from '@/mixins/portfolioAllocations';

import {
  PROFILES,
  PROFILE_CHOOSE_ID,
  PROFILE_FIND_NEAREST_ID,
} from '@/constants';

export default {
  components: {
    ProfileHowSelector: () => import('./ProfileHowSelector'),
  },

  mixins: [portfolioAllocations],

  data: () => ({
    chosenProfileId: 0,
    profileHowSelectedId: PROFILE_FIND_NEAREST_ID,
  }),

  computed: {
    ...mapGetters(['positions']),

    nearestProfileId() {
      let nearestId = 0,
        nearestRatio = 0;

      /**
       * algorithm:
       * a / b ~ c / d <=>
       * <=> a * d ~ b * c <=>
       * <=> min(left, right) / max(left, right) ~ 1, maximum
       */
      PROFILES.forEach(({ data }, i) => {
        const t = [
          data[0] * this.allocations[1].amount,
          data[1] * this.allocations[0].amount,
        ];
        const ratio = Math.min(...t) / Math.max(...t);
        if (nearestRatio < ratio) {
          nearestId = i;
          nearestRatio = ratio;
        }
      });

      return nearestId;
    },

    profileTitles() {
      return PROFILES.map(({ title }) => title);
    },
  },

  watch: {
    profileHowSelectedId: 'updateProfileId',
    chosenProfileId: 'updateProfileId',
  },

  mounted() {
    this.updateProfileId();
  },

  created() {
    this.PROFILE_CHOOSE_ID = PROFILE_CHOOSE_ID;
  },

  methods: {
    updateProfileId() {
      if (this.profileHowSelectedId === PROFILE_FIND_NEAREST_ID) {
        this.$emit('update:profile-id', this.nearestProfileId);
      } else {
        this.$emit('update:profile-id', this.chosenProfileId);
      }
    },
  },
};
</script>
