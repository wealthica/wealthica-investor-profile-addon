import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from '@/plugins/vuetify';
import '@/plugins/highcharts-vue';
import '@/plugins/vue-toastr';
import '@/plugins/vue-truncate-filter';

Vue.config.productionTip = false;

store.dispatch('initAddon');

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
