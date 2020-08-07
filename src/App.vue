<template>
  <v-app :style="appStyle">
    <div class="mx-2">
      <v-row>
        <v-col cols="12" sm="6">
          <portfolio-card />
        </v-col>
        <v-col cols="12" sm="6">
          <profile-card :profile="profile" :is-nearest="isNearest" />
        </v-col>
      </v-row>

      <profile-selector @update:profile="updateProfile" />

      <portfolio-rebalancing-card :profile="profile" />
    </div>
  </v-app>
</template>

<script>
import { PROFILES } from '@/constants';

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
    isNearest: true,
  }),

  computed: {
    profile() {
      return this.profileId === null ? null : PROFILES[this.profileId];
    },

    appStyle() {
      return process.env.NODE_ENV === 'development' ? 'width: 1123px' : '';
    },
  },

  methods: {
    updateProfile(id, isNearest) {
      this.profileId = id;
      this.isNearest = isNearest;
    },
  },
};
</script>
