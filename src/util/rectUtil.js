import { scrolling } from "./scrollCallback";

//フレームに入ってから出るまでを正規化
const normalize = (vheight, sheight) => {
  return (1.0 - sheight / vheight - 1).toFixed(2);
};

/**
 *
 * @param {*} ref
 * @param {*} _margin 画面高さに対して、入る判定の上下マージン調整
 * @param {*} callback
 */
const inFrame = (ref, _margin = 0.0, callback) => {
  const winHeight = window.innerHeight;
  const margin = window.innerHeight * _margin;

  scrolling((scrollTop) => {
    const rect = ref.getBoundingClientRect();
    //コンポーネントの表示領域
    const visibleHeight = window.innerHeight + rect.height;
    const topBefore = winHeight - margin > rect.top;
    const bottomAfter = 0 + margin < rect.top + rect.height;
    const result = topBefore && bottomAfter;
    //スクロール量
    const scrollValue = rect.top - (winHeight - margin);
    const rate = normalize(visibleHeight, scrollValue);
    //スクロール量を正規化
    callback({
      result,
      rate
    });
  });
};

const fixTop = (ref, callback) => {
  scrolling((scrollTop) => {
    const rect = ref.getBoundingClientRect();
    const fix = 0 >= rect.top;
    callback({ fix });
  });
};

const fixBottom = (ref, callback) => {
  scrolling((scrollTop) => {
    const rect = ref.getBoundingClientRect();
    const fix = window.innerHeight >= rect.top + rect.height;
    callback({ fix });
  });
};

const asyncInFrame = async (ref) => {
  return new Promise((resolved) => {
    inFrame(ref, (result) => {
      resolved(result);
    });
  });
};

export { inFrame, asyncInFrame, fixTop, fixBottom };
