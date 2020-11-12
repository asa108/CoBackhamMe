<template>
  <img
    alt="VRMONKEY"
    src="https://storage.googleapis.com/co_backham_me/images/vrmonkey.png"
    :style="styles"
  />
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: "auto",
    },
    filter: {
      type: String,
      default: "",
    },
  },
  computed: {
    styles() {
      return `width:${this.width}px;filter:${this.filter}`;
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
</style>