<template>
  <v-app :style="appStyle">
    <div v-if="!!positions.length" class="mx-2">
      <v-row>
        <v-col cols="12" sm="6">
          <portfolio-card />
        </v-col>
        <v-col cols="12" sm="6">
          <profile-card
            :profile="profile"
            :is-nearest="isNearest"
            @scroll-to-profile-selector="scrollToProfileSelector"
          />
        </v-col>
      </v-row>

      <profile-selector
        id="profile-selector"
        :profile-how-selected-id.sync="profileHowSelectedId"
        :profile-id.sync="profileId"
      />

      <portfolio-rebalancing-card :profile="profile" />
    </div>
    <!-- <div v-else class="text-h5 primary text-center">
      No Positions Information
    </div> -->
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  PROFILES,
  PROFILE_CHOOSE_ID,
  PROFILE_FIND_NEAREST_ID,
} from '@/constants';

export default {
  name: 'App',

  components: {
    PortfolioCard: () => import('./components/PortfolioCard'),
    ProfileCard: () => import('./components/ProfileCard'),
    ProfileSelector: () => import('./components/ProfileSelector'),
    PortfolioRebalancingCard: () =>
      import('./components/PortfolioRebalancingCard'),
  },

  data: () => ({
    profileId: null,
    profileHowSelectedId: PROFILE_FIND_NEAREST_ID,
  }),

  computed: {
    ...mapGetters(['positions']),

    profile() {
      return this.profileId === null ? null : PROFILES[this.profileId];
    },

    appStyle() {
      return process.env.NODE_ENV === 'development' ? 'max-width: 1123px' : '';
    },

    isNearest() {
      return this.profileHowSelectedId === PROFILE_FIND_NEAREST_ID;
    },
  },

  methods: {
    scrollToProfileSelector() {
      const element = document.getElementById('profile-selector');
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
      this.profileHowSelectedId = PROFILE_CHOOSE_ID;
    },
  },
};
</script>
