<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
/*eslint no-console: "error"*/
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">

body {
  background: linear-gradient(#e8f5ec 0%,
                              #d9f0e6 10%, 
                              #d4e9d6 20%, 
                              #c8ebe7 30%,
                              #b8eaf5 40%,
                              #c8def6 50%,
                              #cad8f3 60%,
                              #bbaedc 70%,
                              #c0addb 80%,
                              #3681a8 90%);
  height: 1000vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  
}
</style>
