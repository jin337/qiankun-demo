<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/app-react">app-react</router-link> |
    <router-link to="/app-vue">app-vue</router-link>
  </div>

  <router-view />

  <!-- vue子应用入口 -->
  <div id="app-vue"></div>

  <!-- react子应用入口 -->
  <div id="app-react"></div>
</template>

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
