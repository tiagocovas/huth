<template>
  <div class="container">
    <div class="fixed">
      <div class="fixed__box">
        <img class="head head-1" :style="head1Style" alt="head1" src="./../assets/head-1.png">
        <img class="head head-2" :style="head2Style" alt="head2" src="./../assets/head-2.png">
        <img class="head head-3" :style="head3Style" alt="head3" src="./../assets/head-3.png">
      </div>
    </div>

    <div class="bodies">
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
      head1Style: '',
      head2Style: '',
      head3Style: '',
      body1Style: '',
      body2Style: '',
      body3Style: ''
    };
  },

  methods: {
    updateScroll() {
  
      if (window.scrollY > 620) {
        this.body1Style = `top: ${window.scrollY - 300}px;`
      }

      if (window.scrollY > 778) {
        this.body2Style = `top: ${window.scrollY - 300}px;`
      }

      if (window.scrollY > 1104) {
        this.body3Style = `top: ${window.scrollY - 300}px;`
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

.fixed {
  position: fixed;
  margin-top: 100px;
  z-index: 1;

  &__box {
    width: 320px
  }
}

.head {
  width: 60px;
  margin: 23px;
  // transition: all 0.2s ease-in;
}

.head-1 {
  padding-top: 15px;
}

.head-3 {
  padding-top: 5px;
}

.body {
  width: 40px;
  position: relative;
}

.body-1 {
  top: 320px;
  left: 0px;
  position: relative;
}

.body-2 {
  top: 500px;
  left: 2px;
  position: relative;
}

.body-3 {
  top: 800px;
  left: -4px;
  position: relative;
}

.bodies {
  width: 320px;
  display: flex;
  justify-content: space-around;

  margin-top: 500px;
}

.footer {
  position: absolute;
  bottom: 0;
}

</style>
