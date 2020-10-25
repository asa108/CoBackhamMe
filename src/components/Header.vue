<template>
  <div class="header">
    <div class="inner">
      <div class="co">BACKHAM Co., Ltd.</div>
      <div class="vrmonkey">
        <img
          src="https://storage.googleapis.com/co_backham_me/images/vrmonkey.png"
          alt="vrmonkey"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  z-index: 99;
  /* mix-blend-mode: difference; */
}
.inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 16px 32px;
  box-sizing: border-box;
  width: 100%;
}
.co {
  font-size: 14px;
  color: black;
}
.vrmonkey {
  width: 48px;
  padding: 8px;
  display: none;
  img {
    width: 100%;
  }
}
</style>