<template>
  <img
    src="https://storage.googleapis.com/mahou_make/logo-mark-shadow.svg"
    alt="MAHOU MAKE"
    :style="getStyle"
  />
</template>
<script>
export default {
  props: {
    width: Number,
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