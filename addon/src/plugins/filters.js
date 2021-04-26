import Vue from "vue";
import { formatMoney, formatPercentage } from "@/utils/formatMoney";

// register global utility filters.
Vue.filter("formatMoney", formatMoney);
Vue.filter("formatPercentage", formatPercentage);
