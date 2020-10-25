<template>
  <div class="page">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  .inner {
    max-width: 1200px;
  }
}
</style>