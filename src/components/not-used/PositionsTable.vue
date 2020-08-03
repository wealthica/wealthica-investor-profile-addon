<template>
  <v-data-table :headers="HEADERS" :items="positions">
    <template v-slot:item="position">
      <tr>
        <td v-for="({ value: key }, i) in HEADERS" :key="i">
          <span v-if="key === 'security.name'">
            {{ get(position.item, key) | truncate(35) }}
          </span>
          <span v-else-if="key === 'class'">
            {{ get(position.item, key) | snakeToTitleCase }}
          </span>
          <span v-else>
            {{ get(position.item, key) }}
          </span>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
import { get, capitalize } from 'lodash';

import { POSITIONS_TABLE_HEADERS } from '@/constants';

const HEADERS = [
  { text: 'Symbol', value: 'security.symbol' },
  { text: 'Name', value: 'security.name' },
  { text: 'Class', value: 'class' },
  { text: 'Category', value: 'category' },
  { text: 'Value', value: 'value' },
];

export default {
  props: ['positions'],

  filters: {
    /**
     * Converts a snake case stering to title case
     * Example: snake_case -> Snake Case
     */
    snakeToTitleCase: function(value) {
      if (!value) return '';
      return value
        .split('_')
        .map(capitalize)
        .join(' ');
    },
  },

  created() {
    this.HEADERS = HEADERS;
  },

  methods: {
    get,
  },
};
</script>
