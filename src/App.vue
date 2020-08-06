<template>
  <v-app>
    <div class="mx-2">
      <v-row>
        <v-col cols="12" sm="6">
          <portfolio-card />
        </v-col>
        <v-col cols="12" sm="6">
          <profile-card :profile="profile" />
        </v-col>
      </v-row>

      <profile-selector :update:profile-id="updateProfileId" />

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
  }),

  computed: {
    profile() {
      return this.profileId === null ? null : PROFILES[this.profileId];
    },
  },

  methods: {
    updateProfileId(id) {
      this.profileId = id;
    },
  },
};
</script>
