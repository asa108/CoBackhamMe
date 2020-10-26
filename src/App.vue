<template>
  <Home />
</template>

<script>
import Home from "./pages/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  @media screen and (max-width: 559px) {
    margin-top: 0;
    width: 100%;
    overflow: hidden;
  }
}
</style>
