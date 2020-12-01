import {Addon} from '@wealthica/wealthica.js';

export const addon = {
  state: {
    addon: null,
    options: {},
    positions: [],
  },
  getters: {
    addon: ({addon}) => addon,
    addonOptions: ({options}) => options,
    positions: ({positions}) => positions,
    language: state => state.addonOptions.language || "en",
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
  },
  actions: {
    initAddon({commit, dispatch}) {
      // This is only required in the add-on release preparation process.
      const addonConfiguration =
        process.env.VUE_APP_DEVELOPER_ADDON === "true"
          ? {}
          : { id: "wealthica/wealthica-transactions-addon" };

      const addon = new Addon(addonConfiguration);
      commit('SET_ADDON', addon);

      addon
        .on('init', options => {
          commit('SET_OPTIONS', options);
          dispatch('getPositions', options);
        })
        .on('update', options => {
          commit('SET_OPTIONS', options);
          dispatch('getPositions', options);
        });
    },
    getPositions({commit, getters: {addon}}, options) {
      addon.api
        .getPositions(options)
        .then(res => {
          commit('SET_POSITIONS', res);
        })
        .catch(() => console.error('Positions download error'));
    },
  },
};
