<template>
    <div class="underwater">

      <section>
        <div data-aos="fade-right"
         data-aos-easing="ease-out-cubic">
            <div class="title">5</div>
            <div class="title">DECEMBER</div>
        </div>
      </section>

      <section>
        <div data-aos="fade-right"
         data-aos-easing="ease-out-cubic">
            <div>debut record from</div>
            <div class="title">Cuckoo Let Us</div>
        </div>
      </section>

      <section>
        <div class="title" data-aos="fade-right"
         data-aos-easing="ease-out-cubic">
                <div>Hiding Under</div>
                <div>the</div>
                <div>Tree Hut</div>
        </div>
      </section>


    <div class="box-center">
        <img alt="artwork" src="@/assets/artwork.jpg">        

        <div class="box-center__sub">
            <a href="https://www.instagram.com/cuckooletus" target="_blank">
                <i class="fab fa-instagram"></i>
            </a>

            <a href="https://www.facebook.com/cuckooletus" target="_blank">
                <i class="fab fa-facebook-f"></i>
            </a>

            <a href="https://open.spotify.com/artist/1MXipnO4T21bGAFpyJN8F3" target="_blank">
                <i class="fab fa-spotify"></i>
            </a>

            <a href="https://www.youtube.com/channel/UC1bycto3kxsztK_AjQWlIvw" target="_blank">
                <i class="fab fa-youtube"></i>
            </a>

        </div>
        
    </div>


         
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Just+Another+Hand&display=swap');

.underwater {
  color: white;

  &__small {
    font-size: 24px;
  }

  width: 100%;
  height: 100%;
  background: #3681a8;
}
section{
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 25px;
    font-family: 'Just Another Hand', cursive;
    letter-spacing: 3px;
}

.title {
    font-size: 40px
}

.box-center {
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 80vh;

    padding: 10vh 0;

    img {
      width: 80%;
      box-shadow: 0 0 10px rgba(0,0,0,0.6);
    -moz-box-shadow: 0 0 10px rgba(0,0,0,0.6);
    -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.6);
    -o-box-shadow: 0 0 10px rgba(0,0,0,0.6);
    }
    a {
        color: #d9f0e6;
    }

    &__sub {
        font-size: 26px;
        margin-top: 20vh;

        i {
            margin: 0 10px;
        }
    }
}
</style>