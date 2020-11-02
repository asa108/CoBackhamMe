<template>
  <div class="gage">
    <div class="progress" :style="getProgressStyle"></div>
    <div class="total" :style="getTotalStyle"></div>
  </div>
</template>
<script>
export default {
  props: {
    rate: {
      type: Number,
      default: 1,
    },
    color: {
      type: Object,
      default: () => {
        return {
          progress: "black",
          total: "#ccc",
        };
      },
    },
  },
  computed: {
    getProgressStyle() {
      return `transform:scaleX(${this.rate});background-color:${this.color.progress};`;
    },
    getTotalStyle() {
      return `background-color:${this.color.total};`;
    },
  },
};
</script>
<style lang="scss" scoped>
.gage {
  width: 100%;
  height: 2px;
  position: relative;
}
.progress {
  transform-origin: top left;
  position: absolute;
  left: 0;
  top: 0;
  height: 2px;
  width: 100%;
  z-index: 2;
  transform-origin: top left;
  transition: all 0.3s ease-in-out;
}
.total {
  position: absolute;
  left: 0;
  top: 0;
  height: 2px;
  width: 100%;
}
</style>