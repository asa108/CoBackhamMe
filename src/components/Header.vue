<template>
  <div class="header" :class="className">
    <div class="inner">
      <a class="item" href="/">BACKHAM Co., Ltd.</a>
      <!-- <a class="item" href="/works">WORKS</a> -->
      <a class="item" href="https://blog.backham.me" target="_blank">BLOG</a>
    </div>
  </div>
</template>
<script>
import { scrolling } from "../util/scrollCallback";
export default {
  data: () => {
    return {
      className: "",
    };
  },
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  mounted() {
    scrolling((val) => {
      this.className = val > 200 ? "header in" : "header";
    });
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  z-index: 99;
  transition: all 0.3s ease-in-out;
  transform: translateY(-100px);
  mix-blend-mode: difference;
  &.in {
    transform: translateY(0);
  }
}
.inner {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.item {
  padding: 4px 8px;
  text-decoration: none;
  letter-spacing: 0.2em;
  transition: all 0.2s ease-out;
  margin: 0 8px;
  color: #660000;
  &:hover {
    background-color: rgba(128, 128, 128, 0.3);
    border-radius: 24px;
  }
}
</style>