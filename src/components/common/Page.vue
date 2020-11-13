<template>
  <div
    ref="page"
    class="page"
    :class="effect & vec ? 'flip' : ''"
    :style="getStyle()"
  >
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
  props: {
    //Tennetエフェクトをかけない
    effect: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    let prev = 0;
    scrolling((val) => {
      this.vec = prev > val;
      prev = val;
    });
  },
  methods: {
    getRect() {
      return this.$refs.page.getBoundingClientRect();
    },
    getStyle() {
      if (!this.effect) {
        return "background-color:white;";
      } else {
        const index = Math.floor(Math.random() * col.length);
        return this.vec ? `background-color:${col[index]}` : ``;
      }
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