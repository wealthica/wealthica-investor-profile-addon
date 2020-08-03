import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { THEME } from '@/constants';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: THEME,
      light: THEME,
    },
  },
});
