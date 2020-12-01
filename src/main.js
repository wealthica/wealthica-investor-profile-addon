import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from '@/plugins/vuetify';
import '@/plugins/highcharts-vue';
import '@/plugins/vue-toastr';
import '@/plugins/vue-truncate-filter';
import Polyglot from "vue-polyglot";
import locales from "@/locales";
import { mapGetters } from "vuex";

Vue.config.productionTip = false;

Vue.use(Polyglot, { defaultLanguage: "en", languagesAvailable: ["en", "fr"] });
Vue.locales(locales);

new Vue({
  store,
  watch: {
    language(language) {
      this.$polyglot.setLang({ lang: language });
    }
  },
  created(){
    this.$store.dispatch('initAddon');
  },
  computed: { ...mapGetters(["language"]) },
  vuetify,
  render: h => h(App),
}).$mount('#app');
