<template>
  <a :href="url" class="job" :class="active ? '' : 'inactive'">
    <div>{{ title }}</div>
  </a>
</template>
<script>
export default {
  props: {
    title: String,
    url: String,
    active: Boolean,
  },
};
</script>
<style lang="scss" scoped>
.job {
  box-sizing: border-box;
  font-size: 24px;
  text-align: center;
  background-color: #f8f8f8;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin: 16px;
  padding: 16px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #efefef;
    transform: scale(1.03);
  }

  &.inactive {
    color: #aaa;
    text-decoration: line-through;
    pointer-events: none;

    &:hover {
      background-color: #ccc;
      transform: scale(1);
    }
  }
}
</style>