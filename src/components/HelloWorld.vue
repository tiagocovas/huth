<template>
  <div class="container">
    <div class="wrapper">
    <div class="head-container">
      <img class="head head-1" :style="head1Style" alt="head1" src="./../assets/head-1.png">
      <img class="head head-2" :style="head2Style" alt="head2" src="./../assets/head-2.png">
      <img class="head head-3" :style="head3Style" alt="head3" src="./../assets/head-3.png">
    </div>
   
    <img class="body body-1" :style="body1Style" alt="head1" src="./../assets/body-1.png">
    <img class="body body-2" :style="body2Style" alt="head2" src="./../assets/body-2.png">
    <img class="body body-3" :style="body3Style" alt="head3" src="./../assets/body-3.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data () {
    return {
      head1Style: 'left: 50px;',
      head2Style: 'left: 157px;',
      head3Style: 'left: 265px;',
      body1Style: 'top: 400vh; left: 60px;',
      body2Style: 'top: 600vh; left: 170px;',
      body3Style: 'top: 800vh; left: 280px;'
    };
  },

  methods: {
    updateScroll() {
      console.log(window.scrollY);
      this.head1Style = `top: ${200 + window.scrollY}px; left: 50px;`
      this.head2Style = `top: ${200 + window.scrollY}px; left: 157px`
      this.head3Style = `top: ${200 + window.scrollY}px; left: 275px;`

      if (window.scrollY > 2415) {
        this.body1Style = `top: calc(400vh + ${window.scrollY - 2415}px); left: 60px;`
      }


      if (window.scrollY > 3718) {
        this.body2Style = `top: calc(600vh + ${window.scrollY - 3718}px); left: 170px;`
      }


      if (window.scrollY > 5062) {
        this.body3Style = `top: calc(800vh + ${window.scrollY - 5062}px); left: 280px;`
      }
      
    }
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.container {
  display: flex;
  justify-content: center;
}

.wrapper {
  width: 375px;
}

.head {
  width: 60px;
  
  position: absolute;
  top: 200px;

  z-index: 2;
  // transition: all 0.2s ease-in;
}

.body {
  width: 10vw;
  position: absolute;
}
</style>
