import { Addon } from '@wealthica/wealthica.js';

export const addon = {
  state: {
    addon: null,
    options: null,
  },

  mutations: {
    SET_ADDON(state, data) {
      state.addon = data;
    },

    SET_OPTIONS(state, data) {
      state.options = data;
    },
  },

  actions: {
    initAddon({ commit }) {
      console.log('init addon');
      const addon = new Addon();
      commit('SET_ADDON', addon);

      addon
        .on('init', options => commit('SET_OPTIONS', options))
        .on('update', options => commit('SET_OPTIONS', options));
    },
  },
};
