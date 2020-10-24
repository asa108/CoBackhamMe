<template>
  <div class="HelloBackham">{{ msg }}</div>
</template>

<script>
export default {
  name: "HelloBackham",
  props: {
    msg: String,
  },
};
</script>