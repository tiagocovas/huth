<template>
    <div class="underwater">

        <header>
            <div>Cuckoo Let Us</div>
            <!-- <div class="title">Hiding Under the Tree Hut</div> -->
        </header>

        <div class="main-content">
            <img alt="artwork" src="@/assets/artwork.jpg">

            <div class="main-content__actions box-center__top">
                <div class="main-content__pre">
                    <div>listen on</div>
                </div>

                <a href="https://open.spotify.com/album/0a7Ydj6unmbaek7zxEJTJL" target="_blank">
                    <div class="box-center__sub">
                        <div class="btn" v-click="">
                            <span>SPOTIFY</span>
                        </div>
                    </div>
                </a>

                <a href="https://www.youtube.com/watch?v=Twf7019hcmQ&list=OLAK5uy_ksYDYhmcXK81O5bLBxAlkp6bD7PDPav-M" target="_blank">
                    <div class="box-center__sub">
                        <div class="btn" v-click="">
                            <span>YOUTUBE</span>
                        </div>
                    </div>
                </a>

                <a href="https://music.apple.com/us/album/hiding-under-the-tree-hut/1487513459" target="_blank">
                    <div class="box-center__sub">
                        <div class="btn" v-click="">
                            <span>iTUNES</span>
                        </div>
                    </div>
                </a>
            </div>

            


            
        </div>

    <footer >
        <div class="icons">
            <a href="https://www.instagram.com/cuckooletus" target="_blank">
                <i class="fab fa-instagram"></i>
            </a>

            <a href="https://www.facebook.com/cuckooletus" target="_blank">
                <i class="fab fa-facebook-f"></i>
            </a>

            <a href="https://cuckooletus.bandcamp.com/" target="_blank">
                <i class="fab fa-bandcamp"></i>
            </a>

            <a href="https://www.youtube.com/channel/UC1bycto3kxsztK_AjQWlIvw" target="_blank">
                <i class="fab fa-youtube"></i>
            </a>
        </div>

        <div class="icons">
            <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:1MXipnO4T21bGAFpyJN8F3&size=detail&theme=dark" width="300" height="56" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe>
        </div>
        

    </footer>


         
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
    font-size: 30px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  min-height: 100vh;
  background:linear-gradient( rgba(54, 129, 168, 0.7) 100%, rgba(54,129,168, 0.7)100%),url(./../assets/whitenoise.png);


    a {
        color: #d9f0e6;
        text-decoration: none;
        margin: 5px 10px;
    }
}
header{

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    font-size: 30px;
    font-family: 'Just Another Hand', cursive;
    letter-spacing: 3px;

    // margin: 5vh 0;
    padding: 20px;

    @media screen and (min-width: $large-breakpoint) {
        font-size: 50px;
    }
}

footer {
    font-size: 26px;
    
    display: flex;
    justify-content: center;

    i {
        margin: 0 30px;
        font-size: 30px;
        &:hover {
            color:hsl(201, 51%, 19%);
            transition: all 0.2s;
        }
    }
    padding: 20px;

    @media screen and (max-width: $large-breakpoint) {
        font-size: 30px;
        flex-direction: column;

        i {
            margin: 0 10px;

        }
    }
}

.icons {

    display: flex;
    align-items: flex-end;
    justify-content: center;
    
    @media screen and (min-width: $large-breakpoint) {
        margin-left: 50px;
    }

    iframe {
        
        @media screen and (max-width: $large-breakpoint) {
            margin-left: 85px;
            margin-top: 10px;
        }
    }

}

.title {
    font-size: 20px;

    @media screen and (min-width: $large-breakpoint) {
        font-size: 20px;
    }
}

.main-content {
    display: flex;
    // flex-direction: column; 
    justify-content: space-around;
    align-items: center;

    width: 100%;
    max-width: 800px;

    @media screen and (max-width: $large-breakpoint) {
        flex-direction: column;
        justify-content: space-around;
    }

    > img {
      width: 80%;
      max-width: 300px;
      box-shadow: 0 0 10px rgba(0,0,0,0.6);
     -moz-box-shadow: 0 0 10px rgba(0,0,0,0.6);
     -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.6);
     -o-box-shadow: 0 0 10px rgba(0,0,0,0.6);

    @media screen and (min-width: $large-breakpoint) {
        max-width: 400px;
    }


    }


    &__pre {
        font-size: 14px;
    }

    &__actions {
        margin-top: 20px;
    }

    &__top {
        display: flex;
        flex-direction: row;
        @media screen and (max-width: $large-breakpoint) {
            flex-direction: column;
        }
    }
}

.btn {
	color: #FFF;
	transition: all 0.3s;
    position: relative;
    line-height: 30px;
	height: 30px;
	text-align: center;
	width: 150px;
    cursor: pointer;
    font-size: 16px;
    
    @media screen and (min-width: $large-breakpoint) {
        width: 160px;
        font-size: 20px;
        line-height: 50px;
        height: 50px;
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