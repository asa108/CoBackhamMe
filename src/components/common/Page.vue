<template>
  <div class="page" :class="vec ? 'flip' : ''" :style="getRandomColor()">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { scrolling } from "../../util/scrollCallback";
const col = ["white", "#ffffdd", "#ddffff", "#ffddff"];
export default {
  data: () => {
    return {
      vec: true,
      col: col[0],
    };
  },
  mounted() {
    let prev = 0;
    scrolling((val) => {
      this.vec = prev > val;
      prev = val;
    });
  },
  methods: {
    getRandomColor() {
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
  .inner {
    max-width: 1200px;
    @media screen and (max-width: 559px) {
      width: 100%;
      max-width: 100%;
    }
  }
  transition: all 1.6s ease-out;
  background-color: transparent;
  &.flip {
    mix-blend-mode: luminosity;
    background-color: white;
  }
}
</style>