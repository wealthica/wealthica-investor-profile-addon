import Vue from "vue";
import Polyglot from "vue-polyglot";
import locales from "@/locales";
import numeral from "numeral";
import { mapGetters } from "vuex";
import App from "@/App.vue";
import store from "./store";
import "@/plugins/filters";
import "@/plugins/highcharts-vue";
import "@/plugins/tooltip";

import "numeral/locales/fr-ca";
import { BUILD_NUMBER } from "./constants";

console.info(`Risk Profile Widget v.${BUILD_NUMBER}`);
Vue.config.productionTip = false;

Vue.use(Polyglot, { defaultLanguage: "en", languagesAvailable: ["en", "fr"] });
Vue.locales(locales);

new Vue({
  store,
  computed: { ...mapGetters(["language"]) },
  watch: {
    language() {
      this.setLanguage();
    }
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
  render: h => h(App)
}).$mount("#app");
