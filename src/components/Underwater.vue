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

        <a href="https://distrokid.com/hyperfollow/cuckooletus/hiding-under-the-tree-hut" target="_blank">
            <div class="box-center__sub">
                <div class="btn" v-click="">
                    <span>PRE - SAVE</span>
                </div>
            </div>
        </a>
        

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
@import "@/assets/variables.scss";

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

    @media screen and (min-width: $large-breakpoint) {
        font-size: 70px;
    }
}

.title {
    font-size: 40px;

    @media screen and (min-width: $large-breakpoint) {
        font-size: 120px;
    }
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

        @media screen and (min-width: $large-breakpoint) {
            max-width: 600px;
        }
    }
    a {
        color: #d9f0e6;
        text-decoration: none;
    }

    &__sub {
        font-size: 26px;
        margin-top: 10vh;

        i {
            margin: 0 10px;
        }

        @media screen and (min-width: $large-breakpoint) {
            font-size: 40px;

            i {
                margin: 0 30px;
            }
            
        }
        
    }
}

.btn {
	color: #FFF;
	transition: all 0.3s;
    position: relative;
    line-height: 50px;
	height: 50px;
	text-align: center;
	width: 200px;
    cursor: pointer;
    font-size: 16px;
    
    @media screen and (min-width: $large-breakpoint) {
        width: 400px;
        font-size: 40px;
        line-height: 80px;
        height: 80px;
    }
}
.btn span {
	transition: all 0.3s;
}
.btn::before {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	opacity: 0;
	transition: all 0.3s;
	border-top-width: 1px;
	border-bottom-width: 1px;
	border-top-style: solid;
	border-bottom-style: solid;
	border-top-color: rgba(255,255,255,0.5);
	border-bottom-color: rgba(255,255,255,0.5);
	transform: scale(0.1, 1);
}
.btn:hover span {
	letter-spacing: 2px;
}
.btn:hover::before {
	opacity: 1;	
	transform: scale(1, 1);	
}
.btn::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	transition: all 0.3s;
	background-color: rgba(255,255,255,0.1);
}
.btn:hover::after {
	opacity: 0;	
	transform: scale(0.1, 1);
}

</style>