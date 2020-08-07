<template>
  <div>
    <profile-how-selector
      :profile-how-selected-id.sync="profileHowSelectedId"
    />
    <v-slider
      v-model="chosenProfileId"
      :disabled="profileHowSelectedId !== PROFILE_CHOOSE_ID"
      :tick-labels="profileTitles"
      :max="profileTitles.length - 1"
      track-color="#f59e2c"
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
      let i = PROFILES.length - 2;
      for (; i >= 0; i--) {
        if (PROFILES[i].data[0] > this.allocations[0].percent) break;
      }
      // FIXME: init allocations not working
      // console.log(this.allocations[0].percent);
      // console.log(i + 1, PROFILES[i + 1].data[0]);
      return i + 1;
    },

    profileTitles() {
      return PROFILES.map(({ title }) => title);
    },
  },

  watch: {
    profileHowSelectedId: 'updateProfile',
    chosenProfileId: 'updateProfile',
  },

  mounted() {
    this.updateProfile();
  },

  created() {
    this.PROFILE_CHOOSE_ID = PROFILE_CHOOSE_ID;
  },

  methods: {
    updateProfile() {
      const isNearest = this.profileHowSelectedId === PROFILE_FIND_NEAREST_ID;

      this.$emit(
        'update:profile',
        isNearest ? this.nearestProfileId : this.chosenProfileId,
        isNearest,
      );
    },
  },
};
</script>
