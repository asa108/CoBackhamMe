<template>
  <div class="header" :class="className">
    <div class="inner">
      <div class="co">BACKHAM Co., Ltd.</div>
      <div class="vrmonkey">
        <img
          src="https://storage.googleapis.com/co_backham_me/images/vrmonkey.png"
          alt="vrmonkey"
        />
      </div>
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
  /* mix-blend-mode: difference; */
  &.in {
    transform: translateY(0);
  }
}
.inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 16px 32px;
  box-sizing: border-box;
  width: 100%;
}
.co {
  font-size: 14px;
  color: black;
}
.vrmonkey {
  width: 48px;
  padding: 8px;
  display: none;
  img {
    width: 100%;
  }
}
</style>