<template>
  <div
    class="parent text-h6 rounded pa-3"
    :class="{ selected: selected, 'not-selected': !selected }"
    @click="handleClick"
  >
    <v-icon v-if="selected" class="icon" color="primary">
      mdi-checkbox-marked
    </v-icon>
    {{ profileHow.text }}
  </div>
</template>

<script>
export default {
  props: {
    profileHow: {
      type: Object,
      default: () => ({
        text: '',
        id: 0,
      }),
    },
    selected: { type: Boolean },
  },

  methods: {
    handleClick() {
      this.$emit('update:selected-id');
    },
  },
};
</script>

<style lang="scss" scoped>
.parent {
  cursor: pointer;
  position: relative;
  border-width: 2px;
  border-style: solid;
  &.selected {
    border-color: #a04bda;
  }
  &.not-selected {
    border-color: #eee;
  }
}

.icon {
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(4px, -4px);
}
</style>
