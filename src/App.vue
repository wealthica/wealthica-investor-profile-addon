<template>
  <v-app :style="appStyle">
    <div
      v-if="positions.length && !loading"
      class="mx-2 grey--text text--darken-3 mb-5"
    >
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

      <div class="my-10">
        <profile-selector
          id="profile-selector"
          :profile-how-selected-id.sync="profileHowSelectedId"
          :profile-id.sync="profileId"
        />
      </div>

      <portfolio-rebalancing-card :profile="profile" />
    </div>
    <v-card v-else-if="loading" class="text-center mx-4 mt-4 py-4">
      <Loading />
      <p class="mb-0 grey--text">{{ $t("loading") }}</p>
    </v-card>
    <v-card v-else class="text-center mx-4 mt-4">
      <p class="pa-5 grey--text mb-0">
        {{ $t("no_positions_found") }}
      </p>
    </v-card>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "@/assets/svg/loading.svg?inline";
import PortfolioCard from "@/components/PortfolioCard/index.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import ProfileSelector from "@/components/ProfileSelector/index.vue";
import PortfolioRebalancingCard from "@/components/PortfolioRebalancingCard.vue";

import {
  PROFILES,
  PROFILE_CHOOSE_ID,
  PROFILE_FIND_NEAREST_ID
} from "@/constants";

export default {
  name: "App",
  components: {
    Loading,
    PortfolioCard,
    ProfileCard,
    ProfileSelector,
    PortfolioRebalancingCard
  },
  data: () => ({
    profileId: null,
    profileHowSelectedId: PROFILE_FIND_NEAREST_ID
  }),
  computed: {
    ...mapGetters(["positions", "loading"]),
    profile() {
      return this.profileId === null ? {} : PROFILES[this.profileId];
    },
    appStyle() {
      return process.env.NODE_ENV === "development" ? "max-width: 1123px" : "";
    },
    isNearest() {
      return this.profileHowSelectedId === PROFILE_FIND_NEAREST_ID;
    }
  },
  methods: {
    scrollToProfileSelector() {
      const element = document.getElementById("profile-selector");
      element.scrollIntoView({ block: "start", behavior: "smooth" });
      this.profileHowSelectedId = PROFILE_CHOOSE_ID;
    }
  }
};
</script>

<style lang="scss">
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 0 5px 7px 5px rgba(100, 100, 100, 0.1) !important;
}

.tooltip {
  z-index: 1000;

  pointer-events: auto;

  .tooltip-inner {
    font-family: $font-family;
    font-size: $text-2xs !important;
    line-height: 1.4285em;
    background: white;
    padding: 0.833em 1em;
    font-weight: 400;
    font-style: normal;
    color: rgba(0, 0, 0, 0.87);
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
      0 2px 10px 0 rgba(34, 36, 38, 0.15);
    max-width: 265px !important;
    text-align: left;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: white;
  }

  &[x-placement^="top"] {
    .tooltip-arrow {
      border-width: 0.625rem 0.625rem 0 0.625rem;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
      bottom: -0.625rem;
    }
  }

  &[x-placement^="bottom"] {
    .tooltip-arrow {
      border-width: 0 0.625rem 0.625rem 0.625rem;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -0.625rem;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    .tooltip-arrow {
      border-width: 0.625rem 0.625rem 0.625rem 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -0.625rem;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    .tooltip-arrow {
      border-width: 0.625rem 0 0.625rem 0.625rem;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -0.625rem;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden="true"] {
    visibility: hidden;
    opacity: 0;

    &:not(.no-transition) {
      transition: opacity 0.15s, visibility 0.15s;
    }
  }

  &[aria-hidden="false"] {
    visibility: visible;
    opacity: 1;

    &:not(.no-transition) {
      transition: opacity 0.15s;
    }
  }

  &.info {
    $color: rgba(#004499, 0.9);

    .tooltip-inner {
      background: $color;
      color: white;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, 0.1);
      max-width: 300px;
    }

    .tooltip-arrow {
      border-color: $color;
    }
  }

  &.tooltip-loading {
    .tooltip-inner {
      color: #77aaff;
    }
  }
}
</style>
