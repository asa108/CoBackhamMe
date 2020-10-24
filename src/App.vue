<template>
  <Vrmonekey :width="128" />
  <HelloBackham msg="Co.Backham.me" />
</template>

<script>
import Vrmonekey from "./components/Vrmonkey.vue";
import HelloBackham from "./components/HelloBackham.vue";
export default {
  name: "App",
  components: {
    HelloBackham,
    Vrmonekey,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
