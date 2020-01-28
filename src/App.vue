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
  background: 
              linear-gradient(rgb(252,252,197, 0.7) 0%,
                          rgba(217,240,230, 0.7) 10%, 
                          rgba(212,233,214, 0.7) 20%, 
                          rgba(200,235,231, 0.7) 30%,
                          rgba(184,234,245, 0.7) 40%,
                          rgba(200,222,246, 0.7) 50%,
                          rgba(202,216,243, 0.7) 60%,
                          rgba(187,174,220, 0.7) 70%,
                          rgba(192,173,219, 0.7) 80%,
                          rgba(54,129,168, 0.7) 90%), url(./assets/whitenoise.png) left top repeat;
  height: 2500px;
}




</style>
