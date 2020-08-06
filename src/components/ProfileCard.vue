<template>
  <v-card>
    <div class="pa-3 d-flex justify-space-between align-center">
      <h2>Risk Profile</h2>
      <p class="change-profile">Change Profile</p>
    </div>

    <div v-if="profile">
      <div v-if="profile" class="d-flex">
        <v-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <div class="d-flex flex-column">
          <h3>{{ profile.title }} Investor</h3>
          <p v-if="isNearest">BEST MATCH</p>
        </div>
      </div>

      <p>{{ profile.text }}</p>
      <p color="text--grey">Source</p>

      <div class="d-flex space-between">
        <h3><b>Allocation Target</b></h3>
        <p>
          <span>Bonds {{ profile.data[0] }}</span>
          <span>Equities {{ profile.data[1] }}</span>
        </p>
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
.change-profile {
  color: #803eac;
  text-decoration: underline;
  margin: 0;
}
</style>
