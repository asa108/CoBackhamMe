<template>
  <p ref="self">
    <div class="inner" :class="showIn">{{ text }}</div>
  </p>
</template>
<script>
import { inFrame } from "../../util/rectUtil";
export default {
  data: () => {
    return {
      in: false,
    };
  },
  props: {
    text: { type: String, default: "" },
    inRate: { type: Number, default: 0.0 },
  },
  computed: {
    showIn() {
      return this.in ? "in" : "out";
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
p {
  padding: 0 32px;
  margin: 0;
  overflow: hidden;
}
.inner {
  transition: all 0.5s ease-in-out;
  &.in {
    transform: translateY(0);
  }
  &.out {
    transform: translateY(300px);
  }
}
</style>