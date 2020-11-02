<template>
  <img
    src="https://storage.googleapis.com/co_backham_me/works/LOGO_MAHOUMAKE.svg"
    alt="MAHOU MAKE"
    :style="getStyle"
  />
</template>
<script>
export default {
  props: {
    width: String,
  },
  computed: {
    getStyle() {
      return `width:${this.width}px`;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>