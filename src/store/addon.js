import { Addon } from "@wealthica/wealthica.js";

export default {
  state: {
    addon: null,
    options: {},
    positions: [],
    loading: true
  },
  getters: {
    addon: state => state.addon,
    addonOptions: ({ options }) => options,
    positions: ({ positions }) => positions,
    language: (state, getters) => getters.addonOptions.language || "en",
    loading: state => state.loading
  },
  mutations: {
    SET_ADDON(state, data) {
      state.addon = data;
    },
    SET_OPTIONS(state, data) {
      state.options = data;
    },

    SET_POSITIONS(state, data) {
      state.positions = data;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    initAddon({ commit, dispatch }) {
      // This is only required in the add-on release preparation process.
      const addonConfiguration =
        process.env.VUE_APP_DEVELOPER_ADDON === "true"
          ? {}
          : { id: "wealthica/wealthica-investor-profile-addon" };

      const addon = new Addon(addonConfiguration);
      commit("SET_ADDON", addon);

      addon
        .on("init", async options => {
          commit("SET_LOADING", true);
          commit("SET_OPTIONS", options);
          await dispatch("getPositions");
          commit("SET_LOADING", false);
        })
        .on("update", async options => {
          commit("SET_LOADING", true);
          commit("SET_OPTIONS", options);
          await dispatch("getPositions");
          commit("SET_LOADING", false);
        });
    },
    async getPositions({ commit, getters }) {
      const options = {
        institutions: getters.addonOptions.institutionsFilter,
        investments: getters.addonOptions.investmentsFilter
      };

      const positions = await getters.addon.api.getPositions(options);
      commit("SET_POSITIONS", positions);
    }
  }
};
