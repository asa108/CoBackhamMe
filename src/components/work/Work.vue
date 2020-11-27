<template>
  <div ref="self" class="work" :class="getClass" @click="showMore">
    <div class="work-inner">
      <div class="work-summary">
        <div class="work-summary__info">
          <div class="title">{{ contents.title }}</div>
          <div class="description">
            {{ contents.description }}
          </div>
          <div class="tags">
            <div class="tag" v-for="tag in contents.tag" :key="tag">
              {{ tag }}
            </div>
          </div>
          <div class="summary-title">関連リンク</div>
          <div class="links">
            <a
              v-for="link in contents.links"
              :key="link.url"
              class="link"
              :href="link.url"
              target="_blank"
            >
              <div v-if="link.label === 'ios'">
                <AppleIos style="font-size: 48px" />
              </div>
              <div v-if="link.label === 'android'">
                <Android style="font-size: 48px" />
              </div>
              <p
                v-if="link.label !== 'android' && link.label !== 'ios'"
                class="label"
              >
                {{ link.label }}
              </p>
            </a>
          </div>
        </div>
        <div class="work-summary__image">
          <div v-if="contents.items.length" class="image">
            <img :src="contents.items[0]" alt="" />
          </div>
        </div>
        <div class="work-summary__hover">
          <ArrowRightThick />
        </div>
      </div>
      <div ref="workDetail" class="work-detail">
        <div class="work-detail-header">
          <div class="work-detail-title">{{ contents.title }}</div>
        </div>
        <div ref="workDetailInner" class="work-detail__inner">
          <div class="images">
            <div v-for="image in contents.items" :key="image" class="image">
              <img :src="image" alt="" />
            </div>
          </div>
        </div>
        <div class="count-down" :class="countDownValue ? 'in' : ''">
          <div class="label">{{ countDownValue }}</div>
        </div>
        <button class="BtnClose" @click="showClose">
          <WindowClose style="font-size: 24px" />
        </button>
        <div class="slide" :class="getSlideClass" />
      </div>
    </div>
  </div>
</template>
<script>
import { WindowClose, AppleIos, Android, ArrowRightThick } from "mdue";

export default {
  components: {
    WindowClose,
    AppleIos,
    Android,
    ArrowRightThick,
  },
  data: () => {
    return {
      showDetail: false, //詳細フラグ
      fix: false, //固定フラグ
      fitHeight: false, //モーダル高さを画面高さに合わせる
      slideIn: false, //詳細開いて、スライドを開くフラグ
      revTop: 0, //詳細開く前のスクロール座標
      body: document.getElementsByTagName("body")[0],
      workScroll: null,
      scrollMargin: 600, //最後のスクロールの空白ピピクセル
      countDownValue: 0, //最後までスクロールしてから画面切り替えまでのカウントダウン
    };
  },
  props: {
    contents: {
      type: Object,
      defaultValue: {
        key: "",
        title: "",
        description: "",
        tag: [],
        links: [],
        items: [],
      },
    },
  },
  mounted() {
    const countDown = [
      { label: null, scroll: 0 },
      { label: 3, scroll: 100 },
      { label: 2, scroll: 300 },
      { label: 1, scroll: 500 },
      { label: 0, scroll: 600 },
    ];

    //詳細画面の中のスクロールを検知して、
    //最後までスクロールしたら詳細を閉じる
    this.workScroll = this.$refs.workDetail;
    this.workScroll.addEventListener("scroll", () => {
      const scroll = this.workScroll.scrollTop;
      const height = this.workScroll.getBoundingClientRect().height;
      const inner_height = this.$refs.workDetailInner.getBoundingClientRect()
        .height;

      //カウントダウン
      const base = inner_height - this.scrollMargin;
      const scroll_over = scroll + height - base;
      const counter = countDown.find((count) => {
        return count.scroll > scroll_over;
      });
      if (counter) {
        this.countDownValue = counter.label;
      }

      //閉じる
      if (inner_height - 1 < scroll + height) {
        setTimeout(() => {
          this.showClose();
        }, 500);
      }
    });
  },
  computed: {
    getClass() {
      const detail = this.showDetail ? "detail" : "";
      const fitHeight = this.fitHeight ? "fitHeight" : "";
      const fix = this.fix ? "fixed" : "";
      return `${detail} ${fix} ${fitHeight}`;
    },
    getSlideClass() {
      const slidein = this.slideIn ? "in" : "";
      return `${slidein}`;
    },
  },
  methods: {
    showMore() {
      // showDetail > fitHeight > fix & slideIn
      if (!this.showDetail) {
        this.slideDetail();
      }
    },
    showClose() {
      this.clearFit();
    },
    //詳細をスライド
    slideDetail() {
      this.showDetail = true;
      setTimeout(() => {
        this.fitToTop();
        this.fitHeight = true;
      }, 500);
    },

    //拡大して全画面表示
    fitToTop() {
      const rect = this.$refs.self.getBoundingClientRect();
      const win_top = document.scrollingElement.scrollTop;
      this.prevTop = win_top;
      window.scrollBy({
        top: rect.top,
        left: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        this.fix = true;
        this.slideIn = true;
        this.body.style.overflow = "hidden";
      }, 500);
    },

    //元に戻る
    clearFit() {
      this.body.style.overflow = "auto";
      this.slideIn = false;
      this.workScroll.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      window.scrollTo({
        top: this.prevTop,
        left: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        this.fix = false;
        this.showDetail = false;
        this.fitHeight = false;
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "/src/style/config.scss";

$default_width: 80%;
$base_width: 100%;
$w_width: 200%;

.work {
  position: relative;
  width: $default_width;
  height: 80vh;
  margin: auto;
  background-color: white;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  transform: scale(0.9);

  &:hover {
    transform: scale(0.92);
    cursor: pointer;

    .work-summary {
      .work-summary__hover {
        opacity: 1;
      }
    }
  }

  &.detail {
    transform: scale(1);

    .work-inner {
      transform: translateX(-100vw);
    }

    .work-detail-header {
      transform: translateY(0);
    }

    &:hover {
      cursor: default;
      transform: scale(1);
    }
  }

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }

  &.fitHeight {
    width: $base_width;
    height: 100vh;
  }

  .work-inner {
    width: $w_width;
    height: 100% !important;
    display: flex;
    align-items: flex-start;
    transition: all 0.3s ease-out;
    transform: translateX(0);
  }

  .work-summary {
    width: $base_width;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    position: relative;

    .work-summary__hover {
      position: absolute;
      width: 128px;
      height: 128px;
      top: calc(50% - 64px);
      left: calc(50% - 64px);
      font-size: 128px;
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }

    .work-summary__info {
      width: 40%;
      padding: 24px;
      box-sizing: border-box;

      .summary-title {
        margin-top: 16px;
        font-size: 14px;
        color: #888;
        text-align: left;
      }

      .title {
        text-align: left;
        font-size: 38px;
        font-weight: 600;
        padding: 8px 0;
      }
      .description {
        text-align: left;
        font-size: 16px;
        padding: 8px 0;
      }

      .tags {
        padding: 8px 0;
        text-align: left;
        .tag {
          display: inline-block;
          font-size: 12px;
          padding: 4px 8px;
          color: white;
          background-color: black;
          margin: 4px;
          border-radius: 2px;
          font-weight: 600;
        }
      }

      .links {
        text-align: left;
        .link {
          display: inline-block;
          height: 48px;
          margin-right: 24px;
          vertical-align: middle;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
    .work-summary__image {
      width: 60%;
      padding: 24px;
      box-sizing: border-box;

      .image {
        width: auto;
        height: 100%;
        max-height: 100%;
        margin: auto;
        box-sizing: border-box;

        img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
    }

    @include repsSP {
      flex-direction: column;

      .work-summary__info {
        width: 100%;
      }
      .work-summary__image {
        width: 100%;
      }
    }
  }

  .work-detail {
    width: $base_width;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    overflow: scroll;

    .work-detail__inner {
      position: relative;
      width: $base_width;

      .image {
        padding: 32px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          max-height: 90vh;
        }
      }

      &:after {
        content: "";
        display: block;
        height: 600px;
      }
    }
  }
  @include repsSP {
    .work-detail__inner {
      .image {
        padding: 0;
        img {
          width: 90%;
          margin: 5%;
          max-height: none;
        }
      }
    }
  }
}

.BtnClose {
  position: fixed;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  outline: none;
  transition: all 0.2s ease;
  transform: scale(1);
  z-index: 1;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: $base_width;
  height: 150%;
  background-color: black;
  transition-delay: 0.5s;
  transition: all 0.3s ease-out;
  transform: translateY(0);

  &.in {
    transform: translateY(-150%);
  }
}

.work-detail-header {
  position: fixed;
  top: 36px;
  left: $base_width;
  width: $base_width;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  mix-blend-mode: difference;
  transition: all 0.5s ease-in-out;
  transform: translateY(30%);

  .work-detail-title {
    font-size: 24px;
    text-align: center;
  }
}

.count-down {
  position: fixed;
  bottom: 32px;
  left: 100vw;
  width: 100vw;
  height: 100vh;
  transition: all 0.4s ease-in-out;
  transform: translateY(64px);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 99;

  .label {
    text-align: center;
    font-size: 128px;
    color: black;
  }

  &.in {
    opacity: 0.8;
    transform: translateY(0);
  }
}
</style>