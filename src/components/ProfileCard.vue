<template>
  <v-card class="pa-5 grey--text text--darken-3">
    <div class="d-flex justify-space-between align-center">
      <h3 class="grey--text text--darken-3">{{ $t("risk_profile") }}</h3>
      <div
        class="primary--text text-decoration-underline change-profile pa-2 rounded"
        @click="$emit('scroll-to-profile-selector')"
      >
        {{ $t("change_profile") }}
      </div>
    </div>

    <div v-if="profile">
      <div class="d-flex align-center my-5">
        <v-avatar class="mr-4">
          <v-img :src="require(`@/assets/${profile.imagePath}`)"
                 :alt="$t(profile.title)" />
        </v-avatar>
        <div class="d-flex flex-column">
          <h4>{{ $t(profile.title) }}</h4>
          <div
            v-if="isNearest"
            class="secondary white--text rounded px-1 py-0 fit-content text-uppercase"
          >
            {{ $t("best_match") }}
          </div>
        </div>
      </div>

      <p class="mb-0">{{ $t(profile.text) }}</p>
      <p class="grey--text">{{ $t(profile.source) }}</p>

      <div
        class="d-flex flex-wrap justify-space-between align-center grey lighten-4 pa-3 pr-5 right-cut-corner"
      >
        <h4 class="grey--text">{{ $t("allocation_target") }}</h4>
        <div>
          <span class="grey--text">{{ $t("bonds") }} </span>
          <span class="mr-5 primary--text font-larger font-weight-bold">
            {{ profile.data[0] }}
          </span>
          <span class="grey--text">{{ $t("equities") }} </span>
          <span class="secondary--text font-larger font-weight-bold">
            {{ profile.data[1] }}
          </span>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ['profile', 'isNearest'],
  // methods: {
  //   getImage(imagePath) {
  //     return require(imagePath);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.fit-content {
  width: fit-content;
}

.font-larger {
  font-size: larger;
}

.change-profile {
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
}

.right-cut-corner {
  position: relative;
  &:after {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    content: '';
    border-top: 26px solid white;
    border-bottom: 26px solid white;
    border-left: 15px solid transparent;
  }
}
</style>
