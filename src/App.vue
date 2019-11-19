<template>
  <div id="app">

    <div class="main">
      <intro-scroll />
      <Main />
    </div>
    <underwater />

  </div>
</template>

<script>
/*eslint no-console: "error"*/
import IntroScroll from './components/IntroScroll.vue'
import Main from './components/Main.vue'
import Underwater from './components/Underwater.vue'

export default {
  name: 'app',
  components: {
    Main,
    IntroScroll,
    Underwater
  }
}
</script>

<style lang="scss">
@import '../node_modules/normalize.css/normalize.css';

body,html {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f7f0e9;
  height: 100%;
  width: 100%;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


  
  
}

.main {
  background: linear-gradient(#fcfcc5 0%,
                          #d9f0e6 10%, 
                          #d4e9d6 20%, 
                          #c8ebe7 30%,
                          #b8eaf5 40%,
                          #c8def6 50%,
                          #cad8f3 60%,
                          #bbaedc 70%,
                          #c0addb 80%,
                          #3681a8 90%);
  height: 3000px;
}




</style>
