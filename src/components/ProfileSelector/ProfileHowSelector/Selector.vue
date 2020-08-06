<template>
  <div class="selector" @click="selectedIdLocal = profileHow.id">
    {{ profileHow.text }}
    {{ selected }}
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

  computed: {
    selectedIdLocal: {
      get() {
        return this.selectedId;
      },
      set(value) {
        this.$emit('update:selected-id', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.selector {
  cursor: pointer;
}
</style>
