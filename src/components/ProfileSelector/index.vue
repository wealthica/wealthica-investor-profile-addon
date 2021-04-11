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
      :vertical="isVertical"
    />
  </div>
</template>

<script>
import portfolioAllocations from "@/mixins/portfolioAllocations";
import {
  PROFILES,
  PROFILE_CHOOSE_ID,
  PROFILE_FIND_NEAREST_ID
} from "@/constants";
import ProfileHowSelector from "./ProfileHowSelector/index.vue";

export default {
  components: {
    ProfileHowSelector
  },
  mixins: [portfolioAllocations],
  props: {
    profileId: {
      type: Number,
      default: -1
    },
    profileHowSelectedId: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    stickToNearest: true,
    isVertical: false
  }),
  computed: {
    nearestProfileId() {
      const goal = this.allocations[0].percent;

      return PROFILES.reduce((nearest, current, index) => {
        return current.data[0] >= goal &&
          (!nearest || current.data[0] < PROFILES[nearest].data[0])
          ? index
          : nearest;
      }, 0);
    },
    profileTitles() {
      return PROFILES.map(({ title }) => this.$t(title));
    },
    profileIdLocal: {
      get() {
        return this.profileId;
      },
      set(value) {
        this.$emit("update:profile-id", value);
      }
    },
    profileHowSelectedIdLocal: {
      get() {
        return this.profileHowSelectedId;
      },
      set(value) {
        this.$emit("update:profile-how-selected-id", value);
      }
    }
  },
  watch: {
    profileHowSelectedId(value) {
      if (value === PROFILE_FIND_NEAREST_ID) {
        this.stickToNearest = true;
        this.profileIdLocal = this.nearestProfileId;
      }
    },
    profileIdLocal() {
      if (!this.stickToNearest) {
        this.profileHowSelectedIdLocal = PROFILE_CHOOSE_ID;
      } else {
        this.stickToNearest = false;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("setOrientation", this.resize);
  },
  created() {
    this.setOrientation();
  },
  mounted() {
    window.addEventListener("setOrientation", this.resize);

    this.profileIdLocal = this.nearestProfileId;
    this.profileHowSelectedIdLocal = PROFILE_FIND_NEAREST_ID;
  },
  methods: {
    setOrientation() {
      this.isVertical = window.innerWidth < 600;
    }
  }
};
</script>

<style lang="scss">
.my-slider .v-slider {
  cursor: pointer;
}

.my-slider .v-slider.v-slider--vertical {
  min-height: 200px;
  max-width: 20px;
}
</style>
