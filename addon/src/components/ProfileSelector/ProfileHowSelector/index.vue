<template>
  <v-row>
    <v-col v-for="(profileHow, i) in profileHows" :key="i" cols="12" sm="6">
      <selector
        :profile-how="profileHow"
        :selected="profileHow.id === profileHowSelectedIdLocal"
        @update:selected-id="profileHowSelectedIdLocal = profileHow.id"
      />
    </v-col>
  </v-row>
</template>

<script>
import { PROFILE_CHOOSE_ID, PROFILE_FIND_NEAREST_ID } from "@/constants";
import Selector from "@/components/ProfileSelector/ProfileHowSelector/Selector.vue";

export default {
  components: {
    Selector
  },

  props: {
    profileHowSelectedId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      profileHows: [
        {
          id: PROFILE_CHOOSE_ID,
          text: this.$t("what_kind_of_investor_are_you")
        },
        { id: PROFILE_FIND_NEAREST_ID, text: this.$t("nearest_profile") }
      ]
    };
  },

  computed: {
    profileHowSelectedIdLocal: {
      get() {
        return this.profileHowSelectedId;
      },
      set(value) {
        this.$emit("update:profile-how-selected-id", value);
      }
    }
  }
};
</script>
