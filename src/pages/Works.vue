<template>
  <Page :effect="false" ref="page" @mousemove="callChildMethod()">
    <Mouse ref="child" />

    <Toast text="⇦SCROLL" />
    <Header />
    <Cycle :pageRect="pageRect" />
    <!-- WORKS -->
    <div class="sectionTitleCenter">
      <ScrollText :text="contents.WORKS.title" :textType="TEXT_TYPE.TITLE2" />
    </div>
    <!-- 事例が入るまではUnder Construction -->
    <div class="works">
      <div v-for="work in contents.WORKS.list" :key="work.key">
        <Work :ref="work.key" :contents="work" />
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
import Work from "../components/work/Work.vue";
import Mouse from "../components/mouse/Mouse.vue";

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
    Cycle,
    Work,
    Mouse,
  },
  mounted() {
    this.$refs.child.setWorkRef(this.$refs.banto);
    this.$refs.child.setWorkRef(this.$refs.nailholic);
    this.$refs.child.setWorkRef(this.$refs.okinawa_iju);

    this.$nextTick(() => {
      window.scrollTo(300, 1);
      this.pageRect = this.$refs.page.getRect();
    });
  },
  methods: {
    callChildMethod() {
      this.$refs.child.getCursorCoordinate(event);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./pages.scss";
</style>