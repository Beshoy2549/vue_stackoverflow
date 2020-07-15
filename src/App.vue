<template>
  <div id="app">
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.7.2" rel="stylesheet" type="text/css">
    <Appheader />
    <router-view />
  </div>
</template>

<script>
import Appheader from "@/components/global/Appheader.vue";
export default {
  name : "App",
  components : {
    Appheader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
