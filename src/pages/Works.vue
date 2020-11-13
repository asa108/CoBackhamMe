<template>
  <Page :effect="false" ref="page">
    <Toast text="⇦SCROLL" />
    <Header />
    <Cycle :pageRect="pageRect" />
    <!-- WORKS -->
    <!-- 事例が入るまではUnder Construction -->
    <div class="subTextCenter">
      <ScrollText text="Under Construction" :textType="TEXT_TYPE.TEXT" />
    </div>
    <div class="works">
      <div v-for="work in contents.WORKS.list" :key="work.key">
        <Work :contents="work" />
      </div>
    </div>
  </Page>
</template>
<script>
import Page from "../components/common/Page.vue";
import Header from "../components/Header.vue";
import ScrollText from "../components/scrollText/ScrollText.vue";
import Toast from "../components/toast/toast.vue";
import { TEXT_TYPE } from "../components/scrollText/textType";
import { CONTENTS } from "../contents.js";
import Cycle from "../components/cycle/Cycle.vue";
import Maxwidth from "../components/common/Maxwidth.vue";
import Work from "../components/work/Work.vue";

export default {
  name: "Works",
  data: () => {
    return {
      maxwidth: ["100%;", "1200px"],
      TEXT_TYPE,
      pageRect: null,
      contents: CONTENTS,
      list: [1, 2, 3, 4],
    };
  },
  components: {
    Page,
    Header,
    Toast,
    ScrollText,
    Maxwidth,
    Cycle,
    Work,
  },
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(300, 1);
      this.pageRect = this.$refs.page.getRect();
    });
  },
};
</script>
<style lang="scss" scoped>
@import "./pages.scss";
.works {
}
</style>