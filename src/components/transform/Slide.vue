<template>
  <div class="self" ref="self">
    <div class="target" ref="target">
      <slot></slot>
    </div>
    <div class="inner" :style="getStyle"></div>
  </div>
</template>
<script>
import { inFrame } from "../../util/rectUtil";
export default {
  data: () => {
    return {
      in: false,
      rate: 0.0,
      w: 0,
    };
  },
  props: {
    horizontal: Boolean,
    color: {
      type: String,
      default: "black",
    },
  },
  computed: {
    getStyle() {
      return this.in ? this.direction(0) : this.direction(1);
    },
  },
  mounted() {
    this.scroll();
  },
  methods: {
    direction(index) {
      let style = `background-color:${this.color};`;
      if (this.horizontal) {
        return [
          `transform: translateX(101%);${style}`,
          `transform: translateX(0);${style}`,
        ][index];
      } else {
        return [
          `transform: translateY(-101%);${style}`,
          `transform: translateY(0);${style}`,
        ][index];
      }
    },
    async scroll() {
      const child = this.$refs.target.firstElementChild;
      this.w = child.getBoundingClientRect().width;
      //フレームに入った状態を判定
      inFrame(this.$refs.self, 0.3, ({ result, rate }) => {
        this.in = result;
        this.rate = rate;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.self {
  width: 90%;
  margin: auto;
  overflow: hidden;
  position: relative;
}
.target {
  width: 100%;
  position: flex;
  justify-content: center;
}
.inner {
  transition: all 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
}
</style>