import Vue from "vue";
import Vuex from "vuex";

import addon from "./addon";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    addon
  }
});
