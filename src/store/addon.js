import { Addon } from "@wealthica/wealthica.js";

export default {
  state: {
    addon: null,
    options: {},
    positions: [],
    loading: true,
    preferredCurrencyId: "",
    currencies: {}
  },
  getters: {
    addon: state => state.addon,
    addonOptions: ({ options }) => options,
    positions: ({ positions }) => positions,
    language: (state, getters) => getters.addonOptions.language || "en",
    loading: state => state.loading,
    currency: (state, getters) => getters.addonOptions.currency,
    currencies: state => state.currencies,
    preferredCurrencyId: state => state.preferredCurrencyId,
    preferredCurrency: state => state.currencies[state.preferredCurrencyId]
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
    },
    STORE_PREFERRED_CURRENCY_ID(state, id) {
      state.preferredCurrencyId = id;
    },
    STORE_CURRENCIES(state, currencies) {
      state.currencies = currencies.reduce(
        (result, item) => ({ ...result, [item._id]: item }),
        state.currencies
      );
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
        .on("init", options => dispatch("updateData", options))
        .on("update", options => dispatch("updateData", options));
    },
    async updateData({ commit, dispatch }, options) {
      commit("SET_LOADING", true);
      commit("SET_OPTIONS", options);
      await dispatch("fetchCurrencies");
      await dispatch("fetchPositions");
      commit("SET_LOADING", false);
    },
    async fetchPositions({ commit, getters }) {
      const options = {
        institutions: getters.addonOptions.institutionsFilter,
        investments: getters.addonOptions.investmentsFilter
      };

      const positions = await getters.addon.api.getPositions(options);
      commit("SET_POSITIONS", positions);
    },
    async fetchCurrencies({ commit, getters }) {
      const { addon } = getters;
      const currencies = await addon.api.getCurrencies();
      const preferred = currencies.find(currency => currency.preferred);

      commit("STORE_PREFERRED_CURRENCY_ID", preferred._id);
      commit("STORE_CURRENCIES", currencies);
    }
  }
};
