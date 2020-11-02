<template>
  <MediaWrapper :height="height" :content="content">
    <div class="item" v-for="img in content.items" :key="img">
      <img :src="img" alt="" />
    </div>
  </MediaWrapper>
</template>
<script>
import MediaWrapper from "./MediaWrapper.vue";

export default {
  components: {
    MediaWrapper,
  },
  props: {
    height: Number,
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
}
img {
  height: 100%;
}
</style>