import { mapGetters } from "vuex";
import { LABELS } from "@/constants";

export default {
  computed: {
    ...mapGetters(["positions"]),

    allocations() {
      let netAmount = 0;
      const allocations = [0, 1].map(index => ({
        label: this.$t(LABELS[index]),
        amount: 0,
        cntHoldings: 0,
        percent: 0,
        symbols: []
      }));

      this.positions.forEach(position => {
        const index = position.class === "equity" ? 1 : 0;

        allocations[index].amount += position.value;
        allocations[index].cntHoldings += 1;

        if (position.security) {
          allocations[index].symbols.push(
            position.security.symbol || position.security.name
          );
        }

        netAmount += position.value;
      });

      if (netAmount > 0) {
        allocations.forEach((allocation, index) => {
          allocations[index].percent = parseFloat(
            ((100 * allocation.amount) / netAmount).toFixed(2)
          );
          allocations[index].symbolsList = allocation.symbols.join(", ");
        });
      }

      return allocations;
    }
  }
};
