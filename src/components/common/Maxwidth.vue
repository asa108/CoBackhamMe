<template>
  <div :style="getMaxWidth">
    <slot></slot>
  </div>
</template>
<script>
import { isMobile } from "../../util/responsive.js";
export default {
  props: {
    max: {
      type: Array,
    },
  },
  computed: {
    getMaxWidth() {
      return isMobile()
        ? `max-width:${this.max[0]}`
        : `max-width:${this.max[1]}`;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>