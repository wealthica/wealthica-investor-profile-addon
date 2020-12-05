<template>
  <v-card class="pa-5 grey--text text--darken-3">
    <h3 class="grey--text text--darken-3">{{ $t("portfolio_rebalancing") }}</h3>

    <v-data-table
      :headers="headers"
      :items="tableItems"
      hide-default-footer
      class="my-table mx-10 my-5"
    />
  </v-card>
</template>

<script>
import portfolioAllocations from "@/mixins/portfolioAllocations";
import { LABELS } from "@/constants";

export default {
  mixins: [portfolioAllocations],
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      headers: [
        { text: this.$t("class"), value: "class", sortable: false },
        { text: this.$t("current"), value: "current", sortable: false },
        { text: this.$t("target"), value: "target", sortable: false },
        { text: this.$t("rebalancing"), value: "rebalancing", sortable: false }
      ]
    };
  },
  computed: {
    tableItems() {
      const res = [0, 1].map(i => ({
        class: this.$t(LABELS[i]),
        current: `${Math.round(this.allocations[i].percent)}%`,
        target: this.profile.data ? `${this.profile.data[i]}%` : "",
        rebalancing: ""
      }));

      console.log(res);

      res[0].rebalancing =
        res[0].current === res[0].target
          ? this.$t("you_are_on_target")
          : this.$t("you_need_rebalancing");

      return res;
    }
  }
};
</script>

<style lang="scss">
.my-table > .v-data-table__wrapper > table > .v-data-table-header {
  background-color: #f7f8fc !important;
}

.my-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td {
  color: #333 !important;
}

.my-table > .v-data-table__wrapper > table > thead > tr > th {
  color: #333 !important;
}
</style>
