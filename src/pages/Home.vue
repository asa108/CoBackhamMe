<template>
  <Page ref="page">
    <Toast text="⇦SCROLL" />
    <Header />
    <Cycle :pageRect="pageRect" />
    <!-- BACKHAM -->
    <Maxwidth :max="maxwidth">
      <div class="mainTitle">
        <ScrollText text="BACKHAM" :textType="TEXT_TYPE.TITLE2" />
      </div>
      <!-- トップの動画 -->
      <Slide>
        <Top />
      </Slide>
      <!-- トップ画像の説明 -->
      <div class="subText">
        <ScrollText
          v-for="text in contents.TOPTEXTS"
          :key="text"
          :text="text"
          :textType="TEXT_TYPE.TEXT"
        />
      </div>
      <div class="sectionTitle">
        <ScrollText
          v-for="text in contents.TITLES"
          :key="text"
          :text="text"
          :textType="TEXT_TYPE.TITLE"
        />
      </div>
      <div class="subText">
        <ScrollText
          :text="contents.TOPSUBTEXTS[0]"
          :textType="TEXT_TYPE.TEXT"
        />
        <ScrollText
          :text="contents.TOPSUBTEXTS[1]"
          :textType="TEXT_TYPE.TEXT"
        />
      </div>
      <Slide>
        <Scale :scaleStart="2.0" :scaleEnd="1.0">
          <Vrmonkey
            :width="mobileDef('480', 'auto')"
            filter="hue-rotate(60deg) brightness(150%)"
          />
        </Scale>
      </Slide>
    </Maxwidth>

    <!-- PRODUCTS -->
    <Maxwidth :max="maxwidth">
      <div class="sectionTitleCenter">
        <ScrollText
          :text="contents.PRODUCTS.title"
          :textType="TEXT_TYPE.TITLE2"
        />
      </div>
      <div>
        <Card
          :title="contents.PRODUCTS.products.MAHOUMAKE.title"
          :texts="contents.PRODUCTS.products.MAHOUMAKE.texts"
          :url="contents.PRODUCTS.products.MAHOUMAKE.url"
        >
          <LogoMahoumake :width="mobileDef('480', 'auto')" />
        </Card>
      </div>
    </Maxwidth>
    <Movies
      :height="4000"
      :content="contents.PRODUCTS.products.MAHOUMAKE.media"
    />

    <!-- WORKS -->
    <!-- <div> -->
    <Maxwidth :max="maxwidth" v-on:mousemove="callChildMethod()">
      <Mouse ref="child" />
      <div class="sectionTitleCenter">
        <button @click="openWorks" class="btn-icon">
          <ScrollText
            ref="key_work"
            :text="contents.WORKS.title"
            :textType="TEXT_TYPE.TITLE2"
          />
          <!-- <ArrowRightThick style="font-size: 128px" /> -->
        </button>
      </div>
    </Maxwidth>
    <!-- 事例が入るまではUnder Construction -->
    <!-- <div class="subTextCenter">
      <button @click="openWorks" class="btn-icon">
        <ArrowRightThick style="font-size: 128px" />
      </button>
    </div> -->
    <!-- </div> -->
    <!-- ここに事例を追加 Images/Moviesどちらかのコンポーネントで追加する -->

    <!-- 求人 -->
    <Maxwidth :max="maxwidth">
      <div class="sectionTitleCenter">
        <ScrollText
          :text="contents.CAREER.title"
          :textType="TEXT_TYPE.TITLE2"
        />
      </div>
      <div class="subTextCenter">
        <ScrollText
          :text="contents.CAREER.description"
          :textType="TEXT_TYPE.TEXT"
        />
      </div>
      <div class="jobs">
        <Job
          v-for="job in contents.CAREER.jobs"
          :key="job.title"
          :title="job.title"
          :url="job.url"
          :active="job.active"
        />
      </div>
    </Maxwidth>

    <!-- 会社情報 -->
    <Maxwidth :max="maxwidth">
      <div class="sectionTitleCenter">
        <ScrollText
          :text="contents.COMPANY.title"
          :textType="TEXT_TYPE.TITLE2"
        />
      </div>
    </Maxwidth>
    <Images :height="4000" :content="contents.COMPANY.images" />
    <Maxwidth :max="maxwidth">
      <Company :company="contents.COMPANY.info" />
      <Slide>
        <Scale :scaleStart="1.5" :scaleEnd="1.0">
          <Vrmonkey
            :width="mobileDef('480', '240')"
            filter="hue-rotate(60deg) brightness(150%)"
          />
        </Scale>
      </Slide>
      <div class="sectionTitleCenter">
        <div>© Backham Co., Ltd.</div>
      </div>
    </Maxwidth>
  </Page>
</template>
<script>
import Page from "../components/common/Page.vue";
import Header from "../components/Header.vue";
import Top from "../components/top/Top.vue";
import Vrmonkey from "../components/Vrmonkey.vue";
import ScrollText from "../components/scrollText/ScrollText.vue";
import Toast from "../components/toast/toast.vue";
import { TEXT_TYPE } from "../components/scrollText/textType";
import Scale from "../components/transform/Scale.vue";
import Slide from "../components/transform/Slide.vue";
import Card from "../components/card/Card.vue";
import LogoMahoumake from "../assets/products/LogoMahoumake.vue";
import Company from "../components/company/Company.vue";
import Job from "../components/job/Job.vue";
import { isMobile } from "../util/responsive.js";
import { CONTENTS } from "../contents.js";
import Images from "../media/Images.vue";
import Movies from "../media/Movies.vue";
import Cycle from "../components/cycle/Cycle.vue";
import Maxwidth from "../components/common/Maxwidth.vue";
import { ArrowRightThick } from "mdue";
import Mouse from "../components/mouse/Mouse.vue";

export default {
  name: "App",
  data: () => {
    return {
      TEXT_TYPE,
      contents: CONTENTS,
      maxwidth: ["100%;", "1200px"],
      selfRect: null,
      pageRect: null,
    };
  },
  components: {
    Page,
    Header,
    Top,
    Vrmonkey,
    Toast,
    ScrollText,
    Card,
    Scale,
    Slide,
    LogoMahoumake,
    Company,
    Job,
    Images,
    Movies,
    Maxwidth,
    Cycle,
    ArrowRightThick,
    Mouse,
  },
  mounted() {
    this.$refs.child.setWorkRef(this.$refs.key_work);

    this.$nextTick(() => {
      window.scrollTo(300, 1);
      this.pageRect = this.$refs.page.getRect();
    });
  },
  methods: {
    callChildMethod() {
      this.$refs.child.getCursorCoordinate(event);
    },
    /**
     * モバイルと通常の値を渡して判定して返す
     */
    mobileDef(def, mobile) {
      return isMobile() ? mobile : def;
    },
    openWorks() {
      this.$router.push("/works");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./pages.scss";
.jobs {
  text-align: center;
}
.btn-icon {
  outline: none;
  background: none;
  border: none;
  transition: all 0.3s ease-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
}
</style>