import Vue from "vue";
import formatMoney from "@/utils/formatMoney";

// register global utility filters.
Vue.filter("formatMoney", formatMoney);
