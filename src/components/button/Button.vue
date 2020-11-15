<template>
  <button @click="$emit('on-click', value)">
    <div class="label">{{ label }}</div>
  </button>
</template>
<script>
export default {
  props: {
    label: String,
    value: Object,
  },
};
</script>
<style lang="scss" scoped>
button {
  background: none;
  border: none;
  outline: none;

  .label {
    font-size: 16px;
    color: white;
    background-color: black;
    border-radius: 8px;
    padding: 8px;
  }

  &:hover {
    .label {
      color: black;
      background-color: white;
      border: 1px solid black;
    }
    cursor: pointer;
  }
}
</style>