import Vue from "vue";
import { formatMoney, formatPercentage } from "@/utils/formatMoney";

Vue.filter("formatMoney", formatMoney);
Vue.filter("formatPercentage", formatPercentage);
