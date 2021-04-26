import { isMobile } from "mobile-device-detect";
import Vue from "vue";
import VTooltip from "v-tooltip";

Vue.use(VTooltip, {
  defaultBoundariesElement: document.body,
  defaultTrigger: isMobile ? "click" : "hover",
  defaultOffset: 14,
  tooltip: {
    offset: 15
  },
  defaultDelay: { show: 300 }
});
