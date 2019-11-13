<template>
  <div class="background">
    <h1>{{ msg }}</h1>
    <img class="head-1" :style="head1Style" alt="head1" src="./../assets/head1.png">
  </div>
</template>

<script>
export default {
  /*eslint no-console: "error"*/
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data () {
    return {
      head1Style: ''
    };
  },

  methods: {
    updateScroll() {
      this.head1Style = `top: ${0.534*window.scrollY}px; left: ${0.822*window.scrollY}px;`
    }
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >

.head-1 {
  width: 10vw;
  
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.2s ease-in;
}
</style>
