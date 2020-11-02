<template>
  <div>
    <MediaWrapper :height="height" :content="content">
      <div class="item" v-for="mov in content.items" :key="mov">
        <video controls muted autoplay playsinline loop :src="mov"></video>
      </div>
    </MediaWrapper>
  </div>
</template>
<script>
import MediaWrapper from "./MediaWrapper.vue";

export default {
  components: {
    MediaWrapper,
  },
  props: {
    height: {
      type: Number,
      default: 1000,
    },
    content: {
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
.item {
  height: 100%;
  display: inline-block;

  video {
    height: 100%;
  }
}
</style>