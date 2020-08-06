<template>
  <v-row>
    <v-col v-for="(profileHow, i) in profileHows" :key="i" cols="12" sm="6">
      <selector
        :profileHow="profileHow"
        :selected="profileHow.id === profileHowSelectedIdLocal"
        @update:selected-id="profileHowSelectedIdLocal = profileHow.id"
      />
    </v-col>
  </v-row>
</template>

<script>
import { PROFILE_CHOOSE_ID, PROFILE_FIND_NEAREST_ID } from '@/constants';

const profileHows = [
  { id: PROFILE_CHOOSE_ID, text: 'What kind of investor are you?' },
  { id: PROFILE_FIND_NEAREST_ID, text: 'Nearest Profile' },
];

export default {
  components: {
    Selector: () => import('./Selector'),
  },

  props: ['profileHowSelectedId'],

  computed: {
    profileHowSelectedIdLocal: {
      get() {
        return this.profileHowSelectedId;
      },
      set(value) {
        this.$emit('update:profile-how-selected-id', value);
      },
    },
  },

  created() {
    this.profileHows = profileHows;
  },
};
</script>
