<template>
  <Mediaframe :height="height" v-slot="{ context }">
    <div ref="self" class="inner">
      <div
        ref="page"
        class="frame"
        :class="getFix(context.top, context.bottom)"
      >
        <div class="title">{{ content.title }}</div>
        <div class="description">{{ content.description }}</div>
        <div class="scale">
          <div
            ref="items"
            class="items"
            :class="isCenter ? 'center' : ''"
            :style="getHorizontalScroll"
          >
            <div class="item" v-for="mov in content.movies" :key="mov">
              <video
                controls
                muted
                autoplay
                playsinline
                loop
                :src="mov"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Mediaframe>
</template>
<script>
import Mediaframe from "./Mediaframe";
import { inFrame } from "../util/rectUtil";

const POS = {
  TOP: "top",
  BOTTOM: "This bottom",
};
export default {
  data: () => {
    return {
      in: false,
      fix: false,
      pos: POS.TOP,
      rate: 0.0,
      imageWidth: 0,
      isCenter: false,
    };
  },
  components: {
    Mediaframe,
  },
  props: {
    height: Number,
    content: {
      type: Object,
    },
  },
  mounted() {
    this.scroll();
  },
  computed: {
    data() {
      return {
        in: this.in,
        fix: this.fix,
        rate: this.rate,
      };
    },
    getHorizontalScroll() {
      // console.log(`transform:translateX(${this.imageWidth * this.rate}px);`);
      if (this.isCenter) return ``;
      return `transform:translateX(-${this.imageWidth * this.rate}px);`;
    },
  },
  methods: {
    getFix(top, bottom) {
      const _in = this.in ? "in" : "";
      const _pos = this.pos === POS.TOP ? "top" : "bottom";
      const _fix = top && !bottom ? "fix" : "";
      return `${_in} ${_fix} ${_pos}`;
    },
    scroll() {
      // let timer;
      //フレームに入った状態を判定
      inFrame(this.$refs.self, 0.5, ({ result, rate }) => {
        this.rate = rate;
        this.in = result;
        this.pos = this.rate < 0.5 ? POS.TOP : POS.BOTTOM;
        const _width = this.$refs.items.getBoundingClientRect().width;
        const _winWidth = window.innerWidth;
        if (this.rate >= 0.0) {
          this.imageWidth = _width - _winWidth;
        }
        console.log(_width, _winWidth);
        //幅が画面幅よりも狭い場合は中央に寄せる
        this.isCenter = _width < _winWidth;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  box-sizing: border-box;
  padding: 8px;
  position: relative;
  overflow: hidden;
  .title {
    margin-top: 32px;
    font-size: 32px;
    padding: 8px;
  }
  .description {
    font-size: 18px;
    padding: 8px;
  }
  .items {
    height: 70%;
    position: absolute;
    left: 0;
    top: 10%;
    display: flex;
    justify-content: center;
    transition: all 0.3s;

    &.center {
      position: relative;
      display: inline-flex;
    }

    .item {
      height: 100%;
      display: inline-block;

      video {
        height: 100%;
      }
    }
  }
}
.inner {
  display: flex;
  height: 100%;
  position: relative;
  justify-content: center;
}

.frame {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: white;
  transition: all 0.5s ease-in-out;
  margin: auto;
  overflow: hidden;
  z-index: 99;
  transform: scale(0.8);

  .scale {
    width: 100%;
    height: 100%;
    position: relative;
    transition: all 0.5s ease-in-out;
    opacity: 0;
  }

  &.in {
    background-color: #efefef;
    .scale {
      opacity: 1;
    }
  }

  &.fix {
    position: fixed;
    transform: scale(1);
  }

  &.top {
    top: 0;
  }

  &.bottom {
    bottom: 0;
  }
}
</style>