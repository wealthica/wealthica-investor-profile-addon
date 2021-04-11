import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import "@/plugins/highcharts-vue";
import "@/plugins/vue-toastr";
import "@/plugins/vue-truncate-filter";
import "@/plugins/tooltip";
import Polyglot from "vue-polyglot";
import locales from "@/locales";
import { mapGetters } from "vuex";
import App from "@/App.vue";
import store from "./store";
import "@/plugins/filters";

Vue.config.productionTip = false;

Vue.use(Polyglot, { defaultLanguage: "en", languagesAvailable: ["en", "fr"] });
Vue.locales(locales);

new Vue({
  store,
  computed: { ...mapGetters(["language"]) },
  watch: {
    language(language) {
      this.$polyglot.setLang({ lang: language });
    }
  },
  created() {
    this.$store.dispatch("initAddon");
  },
  vuetify,
  render: h => h(App)
}).$mount("#app");
