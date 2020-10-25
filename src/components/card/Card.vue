<template>
  <a :href="url" target="_blank" class="wrapper">
    <div class="card">
      <div class="info">
        <p class="title">{{ title }}</p>
        <p class="text" v-for="text in texts" :key="text">
          {{ text }}
        </p>
      </div>
      <div class="images">
        <Slide horizontal>
          <Scale :scaleStart="1.5" :scaleEnd="0.8">
            <slot></slot>
          </Scale>
        </Slide>
      </div>
    </div>
    <div class="bg" />
    <!-- <div class="line" /> -->
  </a>
</template>
<script>
import Slide from "../transform/Slide.vue";
import Scale from "../transform/Scale.vue";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    texts: {
      type: Array,
      default: () => {
        return [];
      },
    },
    url: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    Scale,
    Slide,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 456px;
  width: 80%;
  margin: auto;
  text-decoration: none;
  position: relative;
  display: block;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
    .bg,
    .line {
      transform: translateX(0);
    }
  }
}
.card {
  display: flex;
  box-sizing: border-box;
  padding: 24px;
}
.bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  z-index: -1;
  transition: all 0.3s ease-in-out;
  transform: translateX(-100%);
}
.line {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 8px;
  background-color: #eee;
  z-index: -1;
  transition: all 0.4s ease-in-out 0.2s;
  transform: translateX(-100%);
}
.info {
  width: This 40%;
  box-sizing: border-box;
  padding: 24px;
  .title {
    font-size: 32px;
    font-weight: 600;
    text-align: left;
  }
  .text {
    font-size: 24px;
    line-height: 20px;
    font-weight: 100;
    text-align: left;
    color: #666;
  }
}
.images {
  flex: 1;
  overflow: hidden;
}
</style>