<template>
  <Page>
    <Toast text="⇦SCROLL" />
    <Header />
    <!-- BACKHAM -->
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
        v-for="text in contents.toptext"
        :key="text"
        :text="text"
        :textType="TEXT_TYPE.TEXT"
      />
    </div>
    <!-- 会社説明 -->
    <div class="sectionTitle">
      <ScrollText
        v-for="text in contents.title1"
        :key="text"
        :text="text"
        :textType="TEXT_TYPE.TITLE"
      />
    </div>
    <div class="subText">
      <ScrollText :text="contents.texts1[0]" :textType="TEXT_TYPE.TEXT" />
      <ScrollText :text="contents.texts1[1]" :textType="TEXT_TYPE.TEXT" />
    </div>
    <Slide>
      <Scale :scaleStart="2.0" :scaleEnd="1.0">
        <Vrmonkey
          :width="mobileDef(480, 240)"
          filter="hue-rotate(60deg) brightness(150%)"
        />
      </Scale>
    </Slide>
    <div class="sectionTitleCenter">
      <ScrollText :text="contents.title2[0]" :textType="TEXT_TYPE.TITLE2" />
    </div>
    <div>
      <Card
        v-for="product in contents.products"
        :key="product.title"
        :title="product.title"
        :texts="product.texts"
        :url="product.url"
      >
        <LogoMahoumake :width="mobileDef(480, 'auto')" />
      </Card>
    </div>
    <div class="sectionTitleCenter">
      <ScrollText :text="contents.title3[0]" :textType="TEXT_TYPE.TITLE2" />
    </div>
    <div class="subTextCenter">
      <ScrollText text="UNDER CONSTRUCTION" :textType="TEXT_TYPE.TEXT" />
    </div>
    <!-- 求人 -->
    <div class="sectionTitleCenter">
      <ScrollText :text="contents.title4[0]" :textType="TEXT_TYPE.TITLE2" />
    </div>
    <div class="subTextCenter">
      <ScrollText :text="contents.texts4[0]" :textType="TEXT_TYPE.TEXT" />
    </div>
    <div class="jobs">
      <Job
        v-for="job in contents.jobs"
        :key="job.title"
        :title="job.title"
        :url="job.url"
      />
    </div>
    <!-- 会社情報 -->
    <div class="sectionTitleCenter">
      <ScrollText :text="contents.title5[0]" :textType="TEXT_TYPE.TITLE2" />
    </div>
    <Company :company="contents.company" />
    <Slide>
      <Scale :scaleStart="1.5" :scaleEnd="1.0">
        <Vrmonkey
          :width="mobileDef(480, 240)"
          filter="hue-rotate(60deg) brightness(150%)"
        />
      </Scale>
    </Slide>
    <div class="sectionTitleCenter">
      <div>© Backham Co., Ltd.</div>
    </div>
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

export default {
  name: "App",
  data: () => {
    return {
      TEXT_TYPE,
      contents: CONTENTS,
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
  },
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(300, 1);
    });
  },
  methods: {
    /**
     * モバイルと通常の値を渡して判定して返す
     */
    mobileDef(def, mobile) {
      return isMobile() ? mobile : def;
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin sectionTitle {
  width: 90%;
  margin: 64px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 559px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
}
.mainTitle {
  @include sectionTitle;
  height: 80vh;
  align-items: center;
}
.sectionTitle {
  @include sectionTitle;
}
.sectionTitleCenter {
  @include sectionTitle;
  width: 100%;
  margin: 128px auto 64px auto;
  @media screen and (max-width: 559px) {
    margin-top: 180px;
    margin-bottom: 32px;
  }
}
.subText {
  margin: 16px 0;
  text-align: left;
  width: 80%;
  @media screen and (max-width: 559px) {
    width: 100%;
  }
}
.subTextCenter {
  margin: 32px;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 559px) {
    margin: 0;
  }
}
.jobs {
  text-align: center;
}
</style>