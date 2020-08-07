<template>
  <div>
    <profile-how-selector
      :profile-how-selected-id.sync="profileHowSelectedIdLocal"
    />
    <v-slider
      v-model="profileIdLocal"
      :tick-labels="profileTitles"
      :max="profileTitles.length - 1"
      track-color="#f59e2c"
      step="1"
      ticks="always"
      tick-size="4"
      class="mt-4 mb-7 my-slider"
    />
  </div>
</template>

<script>
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

  props: ['profileId', 'profileHowSelectedId'],

  computed: {
    nearestProfileId() {
      let i = PROFILES.length - 2;
      for (; i >= 0; i--) {
        if (PROFILES[i].data[0] > this.allocations[0].percent) break;
      }
      return i + 1;
    },

    profileTitles() {
      return PROFILES.map(({ title }) => title);
    },

    profileIdLocal: {
      get() {
        return this.profileId;
      },
      set(value) {
        this.$emit('update:profile-id', value);
      },
    },

    profileHowSelectedIdLocal: {
      get() {
        return this.profileHowSelectedId;
      },
      set(value) {
        this.$emit('update:profile-how-selected-id', value);
      },
    },
  },

  watch: {
    profileHowSelectedId(value) {
      if (value === PROFILE_FIND_NEAREST_ID) {
        this.profileIdLocal = this.nearestProfileId;
        /**
         * profileId changed, so profileHowSelectedId will be set to PROFILE_CHOOSE_ID automatically by watch(profileIdLocal),
         * so need to revert it after some time
         */
        setTimeout(() => {
          this.profileHowSelectedIdLocal = PROFILE_FIND_NEAREST_ID;
        }, 10);
      }
    },

    profileIdLocal() {
      this.profileHowSelectedIdLocal = PROFILE_CHOOSE_ID;
    },
  },

  mounted() {
    this.profileIdLocal = this.nearestProfileId;
    this.profileHowSelectedIdLocal = PROFILE_FIND_NEAREST_ID;
  },

  created() {
    this.PROFILE_CHOOSE_ID = PROFILE_CHOOSE_ID;
  },
};
</script>

<style lang="scss">
.my-slider .v-slider {
  cursor: pointer;
}
</style>
