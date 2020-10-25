<template>
  <div ref="self" :class="textType">
    <ScrollTextInner :text="text" />
  </div>
</template>
<script>
import ScrollTextInner from "./ScrollTextInner";
import { TEXT_TYPE } from "./textType.js";
export default {
  data: () => {
    return {
      inframe: false,
    };
  },
  props: {
    text: {
      type: String,
      default: "",
    },
    textType: {
      type: String,
      default: TEXT_TYPE.TITLE,
    },
  },
  components: {
    ScrollTextInner,
  },
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>