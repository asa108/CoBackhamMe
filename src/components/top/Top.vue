<template>
  <div class="top">
    <video
      controls
      muted
      autoplay
      playsinline
      loop
      src="https://storage.googleapis.com/mahou_make/Assets/mv1_32.mp4"
    ></video>
    <video
      controls
      muted
      autoplay
      playsinline
      loop
      src="https://storage.googleapis.com/mahou_make/Assets/mv2_32.mp4"
    ></video>
    <div class="logo">
      <LogoMahoumake width="48" />
    </div>
  </div>
</template>
<script>
import LogoMahoumake from "../../assets/products/LogoMahoumake.vue";
export default {
  components: {
    LogoMahoumake,
  },
};
</script>
<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 640px;
  overflow: hidden;
  position: relative;
  video {
    height: 140%;
    transform: scale(1.5);
  }
  @media screen and (max-width: 480px) {
    height: 440px;
  }
}

.logo {
  position: absolute;
  left: 32px;
  top: 32px;
  width: 48px;
}
</style>