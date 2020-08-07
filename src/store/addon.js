import { Addon } from '@wealthica/wealthica.js';
import { positions } from '@/constants/positions.dummy.js';

export const addon = {
  state: {
    addon: null,
    options: null,
    positions: [],
  },

  getters: {
    addon: ({ addon }) => addon,
    addonOptions: ({ options }) => options,
    positions: ({ positions }) => positions,
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
    initAddon({ commit, dispatch }) {
      if (process.env.NODE_ENV !== 'development') {
        const addon = new Addon();
        commit('SET_ADDON', addon);

        addon
          .on('init', options => commit('SET_OPTIONS', options))
          .on('update', options => commit('SET_OPTIONS', options));
      }

      dispatch('getPositions');
    },

    getPositions({ commit, getters: { addon } }) {
      if (process.env.NODE_ENV === 'development') {
        commit('SET_POSITIONS', positions);
      } else {
        addon.api
          .getPositions()
          .then(res => {
            commit('SET_POSITIONS', res);
          })
          .catch(() => console.error('Positions download error'));
      }
    },
  },
};
