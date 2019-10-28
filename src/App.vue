<template>
  <div id="app">
<app-navbar></app-navbar>
    <router-view/>
  </div>
</template>

<script>
  import navBar from './components/navbar.vue';

export default {
  name: 'App',
  components: {
    'app-navbar': navBar
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
