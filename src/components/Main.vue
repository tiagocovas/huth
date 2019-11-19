<template>
  <div class="container">

    <div class="fixed">
      <div class="fixed__box">
        <img class="bodypart head head-1" :style="bodypart" alt="head1" src="./../assets/head-1.png">
        <img class="bodypart head head-2" :style="bodypart" alt="head2" src="./../assets/head-2.png">
        <img class="bodypart head head-3" :style="bodypart" alt="head3" src="./../assets/head-3.png">
      </div>
    </div>

    <div class="bodies" :class="aligned ? 'lower-fixed' : ''">
      <img class="bodypart body body-1"
          :style="aligned ? bodypart : body1Style" 
          alt="body1" src="./../assets/body-1.png">
      <img class="bodypart body body-2" 
          :style="aligned ? bodypart : body2Style" 
           alt="head2" src="./../assets/body-2.png">
      <img class="bodypart body body-3"
          :style="aligned ? bodypart : body3Style"
           alt="head3" src="./../assets/body-3.png">
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
      body1Style: 'top: 100vh;',
      body2Style: 'top: calc(100vh + 300px);',
      body3Style: 'top: calc(100vh + 600px);',
      bodypart: '',
      aligned: false
    };
  },

  methods: {
    updateScroll() {
      if (window.scrollY > window.innerHeight) {
        this.body1Style = `top: ${window.scrollY}px; ${this.bodypart}`

        if (window.scrollY > (window.innerHeight + 300)) {
          this.body2Style = `top: ${window.scrollY}px; ${this.bodypart}`
          
          if (window.scrollY > (window.innerHeight + 600)) {

            this.aligned = true;

            if (window.scrollY > 1920) {
              this.bodypart = `opacity: 0.7`
              
              if (window.scrollY > 2200) {
                this.bodypart = `opacity: 0.3`

                if (window.scrollY > 2500) {
                  this.bodypart = `opacity: 0.0`
                }
              }

            } else {
              this.bodypart = `opacity: 1`
            }
          } else {
            this.aligned = false;
          }
        }
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
@import "@/assets/variables.scss";

.container {
  display: flex;
  justify-content: center;
}

.fixed {
  position: fixed;
  margin-top: 100px;
  z-index: 1;

  &__box {
    width: $small-width;

    @media screen and (min-width: $large-breakpoint) {
      display: flex;
      justify-content: space-around;
      width: $large-width;
    }

  }
}

.lower-fixed {
  position: fixed;
  margin-top: 200px;
}

.head {
  width: 60px;
  margin: 23px;

  @media screen and (min-width: $large-breakpoint) {
    width: 120px;
    margin: 0;
  }
}

.head-1 {
  padding-top: 20px;

  @media screen and (min-width: $large-breakpoint) {
    padding-top: 40px;
  }
}

.head-3 {
  padding-top: 5px;
}

.bodypart {
  transition: opacity 0.5s ease-in;
}

.body {
  width: 40px;
  height: 122px;
  position: relative;

  @media screen and (min-width: $large-breakpoint) {
    width: 80px;
    height: auto;
  }
}

.body-1 {
  left: 0px;
}

.body-2 {
  left: 2px;
}

.body-3 {
  left: -4px;
}

.bodies {
  width: $small-width;
  display: flex;
  justify-content: space-around;

  margin-top: 200px;

  @media screen and (min-width: $large-breakpoint) {
    width: $large-width;
    margin-top: 250px;
  }
}

.footer {
  position: absolute;
  bottom: 0;
}

</style>
