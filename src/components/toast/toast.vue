<template>
  <div class="toast" :class="className">
    <div class="text">{{ text }}</div>
  </div>
</template>
<script>
import { scrolling } from "../../util/scrollCallback";
export default {
  data: () => {
    return {
      className: "in",
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
      this.className = val > 100 ? "" : "in";
    });
  },
};
</script>
<style lang="scss" scoped>
.toast {
  color: #aaa;
  /* background-color: black; */
  padding: 8px 32px;
  font-size: 20px;
  letter-spacing: 0.4em;
  border-radius: 24px;
  box-sizing: border-box;
  position: fixed;
  top: 72px;
  right: -48px;
  width: 240px;
  transition: all 0.2s ease-in-out;
  transform: translateY(-220px) rotate(-90deg);

  &.in {
    transform: translateY(0) rotate(-90deg);
  }
}
</style>