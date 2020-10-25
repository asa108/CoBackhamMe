<template>
  <Page>
    <Header />
    <Vrmonkey width="480" filter="hue-rotate(-30deg) brightness(150%)" />
    <div class="sectionTitle">
      <ScrollText :text="contents.title1[0]" :textType="TEXT_TYPE.TITLE" />
      <ScrollText :text="contents.title1[1]" :textType="TEXT_TYPE.TITLE" />
      <ScrollText :text="contents.title1[2]" :textType="TEXT_TYPE.TITLE" />
      <ScrollText :text="contents.title1[3]" :textType="TEXT_TYPE.TITLE" />
      <ScrollText :text="contents.title1[4]" :textType="TEXT_TYPE.TITLE" />
    </div>
    <div class="subText">
      <ScrollText :text="contents.texts1[0]" :textType="TEXT_TYPE.TEXT" />
      <ScrollText :text="contents.texts1[1]" :textType="TEXT_TYPE.TEXT" />
    </div>
    <Scale :scaleStart="1.2" :scaleEnd="1.0">
      <Vrmonkey width="480" filter="hue-rotate(60deg) brightness(150%)" />
    </Scale>
    <div class="sectionTitle">
      <ScrollText :text="contents.title2[0]" :textType="TEXT_TYPE.TITLE2" />
    </div>
    <Scale :scaleStart="1.2" :scaleEnd="1.0">
      <Vrmonkey width="480" filter="hue-rotate(60deg) brightness(150%)" />
    </Scale>
  </Page>
</template>
<script>
import Page from "../components/common/Page.vue";
import Header from "../components/Header.vue";
import Vrmonkey from "../components/Vrmonkey.vue";
import ScrollText from "../components/ScrollText/ScrollText.vue";
import { TEXT_TYPE } from "../components/ScrollText/textType";
import Scale from "../components/transform/Scale.vue";
export default {
  name: "App",
  data: () => {
    return {
      TEXT_TYPE,
      contents: {
        title1: ["AI", "AR", "UI/UX", "FRONT", "END"],
        texts1: [
          "We know what it takes to develop a successful AI/AR.",
          "products.That's why we deliver success and make your apps stand out in the market.",
        ],
        title2: ["WORKS"],
      },
    };
  },
  components: {
    Page,
    Header,
    Vrmonkey,
    ScrollText,
    Scale,
  },
  mounted() {
    this.scroll();
  },
  methods: {
    async scroll() {},
  },
};
</script>
<style lang="scss" scoped>
.sectionTitle {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.subText {
  margin: 32px;
  text-align: left;
  width: 50%;
}
</style>