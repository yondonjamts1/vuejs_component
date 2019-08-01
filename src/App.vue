<template>
  <div id="app">
    <testComp>hi</testComp>
    <img src="./assets/logo.png">
    <br>
    <router-link to="/">Home</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/hello">HelloWorld</router-link>
    <router-link to="/404">Broken Link</router-link>
    <router-view/>
  </div>
</template>

<script>

import testComp from './components/testComp/index.vue';

export default {
  name: 'App',
  components: {
    testComp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
