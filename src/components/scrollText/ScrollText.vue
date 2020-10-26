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
@mixin title {
  font-size: 256px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #333355;
  padding: 0 32px;
  margin: 0;
}
.title {
  @include title;
  @media screen and (max-width: 559px) {
    font-size: 96px;
    margin-top: 24px;
    padding: 0;
  }
}
.title2 {
  @include title;
  justify-content: center;
  font-size: 156px;
  text-align: center;
  @media screen and (max-width: 559px) {
    font-size: 64px;
    width: 100%;
    padding: 0;
  }
}
.text {
  font-size: 32px;
  font-weight: bold;
  color: #333355;
  padding: 0 8px;
  margin: 0;
  margin-bottom: 16px;
  @media screen and (max-width: 559px) {
    font-size: 16px;
    margin-bottom: 24px;
  }
}
</style>