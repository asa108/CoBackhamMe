<template>
  <img
    alt="VRMONKEY"
    src="https://storage.googleapis.com/co_backham_me/images/vrmonkey.png"
    :style="styles"
  />
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
      default: 128,
    },
  },
  computed: {
    styles() {
      return `width:${this.width}px`;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>