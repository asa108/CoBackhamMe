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
        <button class="BtnClose" @click="showClose">
          <WindowClose style="font-size: 24px" />
        </button>
        <div class="slide" :class="getSlideClass" />
      </div>
    </div>
  </div>
</template>
<script>
import { WindowClose, AppleIos, Android } from "mdue";

export default {
  components: {
    WindowClose,
    AppleIos,
    Android,
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
  watch: {
    contents: {
      immediate: true,
      handler(newval) {
        console.log(newval.items[0]);
      },
    },
  },
  mounted() {
    //詳細画面の中のスクロールを検知して、
    //最後までスクロールしたら詳細を閉じる
    this.workScroll = this.$refs.workDetail;
    this.workScroll.addEventListener("scroll", () => {
      const scroll = this.workScroll.scrollTop;
      const height = this.workScroll.getBoundingClientRect().height;
      const inner_height = this.$refs.workDetailInner.getBoundingClientRect()
        .height;
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
      }, 800);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./work.scss";
</style>