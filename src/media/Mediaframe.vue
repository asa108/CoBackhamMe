<template>
  <div ref="self" class="workframe" :style="getStyle">
    <slot :context="fixes"></slot>
  </div>
</template>
<script>
import { fixTop, fixBottom } from "../util/rectUtil";
export default {
  data: () => {
    return {
      fixes: {
        top: false,
        bottom: false,
      },
    };
  },
  props: {
    height: {
      type: Number,
    },
  },
  computed: {
    getStyle() {
      return `height:${this.height}px`;
    },
  },
  mounted() {
    //画面上部に到達
    fixTop(this.$refs.self, ({ fix }) => {
      this.fixes.top = fix;
    });
    fixBottom(this.$refs.self, ({ fix }) => {
      this.fixes.bottom = fix;
    });
  },
};
</script>
<style lang="scss" scoped>
.workframe {
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
}
</style>