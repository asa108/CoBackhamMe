<template>
  <div ref="self" class="scaler" :style="getStyle">
    <slot></slot>
  </div>
</template>
<script>
import { inFrame } from "../../util/rectUtil";
export default {
  data: () => {
    return {
      in: false,
      normalizeRate: 1.0,
    };
  },
  props: {
    scaleStart: {
      type: Number,
      default: 2.0,
    },
    scaleEnd: {
      type: Number,
      default: 1.0,
    },
  },
  computed: {
    getStyle() {
      return this.in
        ? `transform: scale(${this.scaleEnd})`
        : `transform: scale(${this.scaleStart})`;
    },
  },
  mounted() {
    this.scroll();
  },
  methods: {
    async scroll() {
      //フレームに入った状態を判定
      inFrame(this.$refs.self, 0.3, ({ result, rate }) => {
        this.in = result;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.scaler {
  transition: all 0.5s ease-in-out;
}
</style>