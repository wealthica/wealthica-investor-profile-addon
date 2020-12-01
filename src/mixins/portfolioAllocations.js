import { mapGetters } from "vuex";
import { LABELS } from "@/constants";

export default {
  computed: {
    ...mapGetters(["positions"]),

    allocations() {
      let netAmount = 0;
      const allocations = [0, 1].map(i => ({
        label: this.$t(LABELS[i]),
        amount: 0,
        cntHoldings: 0
      }));

      this.positions.forEach(position => {
        const i = position.class === "equity" ? 1 : 0;
        allocations[i].amount += position.value;
        netAmount += position.value;
        allocations[i].cntHoldings += 1;
      });

      allocations.forEach((allocation, index) => {
        allocations[index].percent = (100 * allocation.amount) / netAmount;
      });

      return allocations;
    }
  }
};
