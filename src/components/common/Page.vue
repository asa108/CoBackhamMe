<template>
  <div ref="page" class="page" :class="vec ? 'flip' : ''" :style="getStyle()">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { scrolling } from "../../util/scrollCallback";
const col = ["white", "#ffffdd", "#ddffff", "#ffddff", "black", "#888"];
export default {
  data: () => {
    return {
      vec: true,
      col: col[0],
      page: null,
      height: 0,
      move: "",
    };
  },
  mounted() {
    let prev = 0;
    // this.page = this.$refs.page;
    // this.$nextTick(() => {
    //   this.height = this.page.getBoundingClientRect().height;
    //   this.move = `top:-${this.height}px;`;
    // });
    scrolling((val) => {
      this.vec = prev > val;
      prev = val;
      // console.log(this.height, val, -(this.height - val));
      // this.move = `top:-${this.height - val}px`;
    });
  },
  methods: {
    getRect() {
      return this.$refs.page.getBoundingClientRect();
    },
    getStyle() {
      const index = Math.floor(Math.random() * col.length);
      return this.vec ? `background-color:${col[index]}` : ``;
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  position: relative;
  .inner {
    @media screen and (max-width: 559px) {
      width: 100%;
    }
  }
  /* transition: all 1.6s ease-out; */
  background-color: transparent;
  &.flip {
    mix-blend-mode: luminosity;
    background-color: white;
  }
}
</style>