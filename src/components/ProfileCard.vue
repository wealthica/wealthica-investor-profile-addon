<template>
  <v-card class="pa-5">
    <div class="d-flex justify-space-between align-center">
      <h2>Risk Profile</h2>
      <div
        class="primary--text text-decoration-underline change-profile pa-2 rounded"
        @click="$emit('scroll-to-profile-selector')"
      >
        Change Profile
      </div>
    </div>

    <div v-if="profile">
      <div class="d-flex align-center my-5">
        <v-avatar class="mr-4">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <div class="d-flex flex-column">
          <h3>{{ profile.title }} Investor</h3>
          <div
            v-if="isNearest"
            class="secondary white--text rounded px-1 py-0 fit-content"
          >
            BEST MATCH
          </div>
        </div>
      </div>

      <p class="mb-0">{{ profile.text }}</p>
      <p class="grey--text">Source</p>

      <div
        class="d-flex flex-wrap justify-space-between align-center grey lighten-4 pa-3 pr-5 rounded-r-xl"
      >
        <h4 class="grey--text">Allocation Target</h4>
        <div>
          <span>Bonds </span>
          <span class="mr-5 primary--text font-larger">{{
            profile.data[0]
          }}</span>
          <span>Equities </span>
          <span class="secondary--text font-larger">{{ profile.data[1] }}</span>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ['profile', 'isNearest'],
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
</style>
