<template>
  <div class="selector" @click="handleClick">
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

  methods: {
    handleClick() {
      console.log('clicked');
      this.$emit('update:selected-id');
    },
  },
};
</script>

<style lang="scss" scoped>
.selector {
  cursor: pointer;
}
</style>
