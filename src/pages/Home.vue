<template>
  <Page>
    <Toast text="⇦SCROLL" />
    <Header />
    <div class="mainTitle">
      <ScrollText text="BACKHAM" :textType="TEXT_TYPE.TITLE2" />
    </div>
    <Slide>
      <Top />
    </Slide>
    <!-- <Vrmonkey width="480" filter="hue-rotate(-30deg) brightness(150%)" /> -->
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
        <Vrmonkey width="480" filter="hue-rotate(60deg) brightness(150%)" />
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
        <LogoMahoumake width="480" />
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
        <Vrmonkey width="480" filter="hue-rotate(60deg) brightness(150%)" />
      </Scale>
    </Slide>
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
import { scrolling } from "../util/scrollCallback.js";
export default {
  name: "App",
  data: () => {
    return {
      TEXT_TYPE,
      contents: {
        title1: ["AI", "AR", "DESIGN", "UI/UX", "FRONT", "END"],
        texts1: [
          "We know what it takes to develop a successful AI/AR products.",
          "That's why we deliver success and make your apps stand out in the market.",
        ],
        title2: ["PRODUCTS"],
        products: [
          {
            title: "MAHOU MAKE",
            texts: [
              "Wake up to Make up,",
              "Right here Right Now!😂😂",
              "LIVE VIRTUAL MAKE-UP CAMERA",
            ],
            url: "https://mahoumake.com",
          },
        ],
        title3: ["WORKS"],
        title4: ["CAREER"],
        texts4: ["Let’s create something valuable together."],
        jobs: [
          { title: "DESIGNER", url: "" },
          { title: "SENIER ENGINEER", url: "" },
          { title: "FRONTEND ENGINEER", url: "" },
          { title: "PYTHON ENGINEER", url: "" },
          { title: "MARKETING PLANNER", url: "" },
        ],
        title5: ["COMPANY"],
        company: {
          name: "バッカム株式会社",
          address: "〒901-2131 沖縄県浦添市牧港 3-22-5 🗺",
          map: "https://goo.gl/maps/3WbtfS3remAxJB1z5",
          mail: "victoria@backham.me",
          tel: "090-8497-5761",
          established: "2014.1",
          outline:
            "バッカムは、デザインとテクノロジーのクリエイティブカンパニーです。これまでクライアント様よりご依頼頂いた案件を、「今」に合ったデザイン力・技術力で確かなカタチとしてご提案し、それを実現させて頂いてきました。バッカムはクリエイティブで新しい世界の可能性を追求していきます。",
        },
      },
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
    this.toast();
    this.$nextTick(() => {
      window.scrollTo(200, 0);
    });
  },
  methods: {
    toast() {
      scrolling((value) => {
        console.log(value);
      });
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
}
.subText {
  margin: 32px;
  text-align: left;
  width: 50%;
}
.subTextCenter {
  margin: 32px;
  text-align: center;
  width: 100%;
}
.jobs {
  text-align: center;
}
</style>