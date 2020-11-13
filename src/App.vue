<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  background-color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;

  @media screen and (max-width: 559px) {
    margin-top: 0;
    width: 100%;
  }
}
</style>
