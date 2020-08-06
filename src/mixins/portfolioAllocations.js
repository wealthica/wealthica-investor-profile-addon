import { mapGetters } from 'vuex';
import { LABELS } from '@/constants';

export const portfolioAllocations = {
  computed: {
    ...mapGetters(['positions']),

    allocations() {
      let netAmount = 0,
        res = [0, 1].map(i => ({
          label: LABELS[i],
          amount: 0,
          percent: 0,
          cntHoldings: 0,
        }));

      this.positions.forEach(position => {
        const i = position.class === 'equity' ? 1 : 0;
        res[i].amount += position.value;
        res[i].cntHoldings++;
      });

      res.forEach(allocation => {
        allocation.percent = allocation.amount / netAmount;
      });

      return res;
    },
  },
};
