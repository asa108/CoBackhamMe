<template>
  <div>
    <!--カーソル-->
    <p
      id="cursor"
      :style="{
        opacity: opacityA,
        top: mouseY + 'px',
        left: mouseX + 'px',
      }"
    ></p>
    <!--マウスストーカー-->
    <ArrowRightThick
      id="stalker"
      :style="{
        opacity: opacityB,
        top: posY + 'px',
        left: posX + 'px',
      }"
    />
  </div>
</template>

<script>
import { ArrowRightThick } from "mdue";

export default {
  data: () => {
    return {
      mouseX: 0,
      mouseY: 0,
      posX: 0,
      posY: 0,
      opacityA: 0,
      opacityB: 0,
      workRefs: [],
      fps: 60, // 1秒間に処理する回数
      fpsInterval: 0,
      nextTime: 0,
    };
  },
  components: {
    ArrowRightThick,
  },
  mounted() {
    this.fpsInterval = 1000 / this.fps;
    this.nextTime = Date.now() + this.fpsInterval;
    requestAnimationFrame(this.mouseAnimation);
  },
  methods: {
    mouseAnimation() {
      requestAnimationFrame(this.mouseAnimation);

      // 次の間隔まで何もしない
      if (this.nextTime > Date.now()) return;

      this.nextTime = Date.now() + this.fpsInterval;

      if (this.opacityB == 1) {
        if (
          (this.moveX > 0 && this.mouseX < this.posX + this.moveX) ||
          (this.moveX < 0 && this.mouseX > this.posX + this.moveX)
        ) {
          this.posX = this.mouseX;
        } else {
          this.posX = this.posX + this.moveX;
        }

        if (
          (this.moveY > 0 && this.mouseY < this.posY + this.moveY) ||
          (this.moveY < 0 && this.mouseY > this.posY + this.moveY)
        ) {
          this.posY = this.mouseY;
        } else {
          this.posY = this.posY + this.moveY;
        }
      }
    },
    setWorkRef(work) {
      this.workRefs.push(work);
      console.log("work", work);
    },
    getCursorCoordinate(event) {
      this.mouseX = event.pageX;
      this.mouseY = event.pageY;

      this.opacityA = 0;
      this.opacityB = 0;

      for (const work of this.workRefs) {
        // 表示範囲を取得
        const workX_st = work.getRefs().mouseTarget.getBoundingClientRect()
          .left;
        const workY_st = work.getRefs().mouseTarget.getBoundingClientRect().top;
        const workX_en = work.getRefs().mouseTarget.getBoundingClientRect()
          .right;
        const workY_en = work.getRefs().mouseTarget.getBoundingClientRect()
          .bottom;

        // 範囲内に入ったら表示する。
        if (
          event.clientX > workX_st &&
          event.clientX < workX_en &&
          event.clientY > workY_st &&
          event.clientY < workY_en
        ) {
          //this.opacityA = 1; 黒のカーソルは表示しない
          this.opacityB = 1;
        }
      }

      // 非表示の場合はポインタと同じ位置にする。
      if (this.opacityB == 0) {
        this.posX = this.mouseX;
        this.posY = this.mouseY;
      } else {
        this.moveX = (this.mouseX - this.posX) / 20;
        this.moveY = (this.mouseY - this.posY) / 20;
      }
    },
  },
};
</script>

<style>
body {
  position: relative;
  height: 900px;
  background-color: #dcdcdc;
  cursor: pointer; /* bodyに対して設定することでページ全体でデフォルトカーソルを非表示にする*/
  text-align: center;
}

body a:hover {
  cursor: pointer;
}

#cursor {
  position: absolute; /* 最初はページの左上に配置されるようにする */
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  margin: -68px 0 0 -8px; /* カーソルの焦点を中央に合わせる */
  z-index: 3; /*一番手前に来るように*/
  background-color: #000;
  border-radius: 100%;
  opacity: 1; /*開いた瞬間非表示*/
  transition: transform 0.1s;
}

#stalker {
  position: absolute;
  width: 40px;
  height: 40px;
  margin: -80px 0 0 -40px;
  z-index: 5; /*一番手前に来るように*/
  border-radius: 50%;
  opacity: 0; /*開いた瞬間非表示*/
  transition: transform 0.1s;
  pointer-events: none; /*マウス直下に常にstalker要素がくるのでホバー要素が働かなくなる。noneにすることでstalkerを無視する*/
}

@media screen and (max-width: 559px) {
  #cursor {
    margin-top: -4px;
  }
  #stalker {
    margin-top: -20px;
  }
}
</style>