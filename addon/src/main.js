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

import numeral from "numeral";
import "numeral/locales/fr-ca";

Vue.config.productionTip = false;

Vue.use(Polyglot, { defaultLanguage: "en", languagesAvailable: ["en", "fr"] });
Vue.locales(locales);

new Vue({
  store,
  computed: { ...mapGetters(["language"]) },
  watch: {
    language() {
      this.setLanguage();
    },
  },
  created() {
    this.$store.dispatch("initAddon");
    this.setLanguage();
  },
  methods: {
    setLanguage() {
      this.$polyglot.setLang({ lang: this.language });
      numeral.locale(this.language === "fr" ? "fr-ca" : this.language);
    },
  },
  vuetify,
  render: h => h(App)
}).$mount("#app");
