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
  color: white;
  background-color: black;
  padding: 8px 32px;
  font-size: 24px;
  border-radius: 24px;
  box-sizing: border-box;
  position: fixed;
  top: 16px;
  left: calc(50% - 110px);
  width: 220px;
  transition: all 0.2s ease-in-out;
  transform: translateY(-120px);

  &.in {
    transform: translateY(0);
  }
}
</style>