<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <div ref="rombo" id="rombo" @click="windowTop()" v-show="store.isScrolled">
        <i class="fa-solid fa-angles-up"></i>
    </div>
    <!-- <section id="jumbosello">
      <div ref="jumbo" class="wrapper">
        <img src="/images/Vi_League_Of_Legends.jpg" alt="Vi">
        <img src="/images/League_of_Legends_Darius.jpg" alt="Darius">
      </div>
      <i id="right" @click="scrollDownJumbo()" class="fa-solid fa-chevron-right" style="color: #f9aa01;"></i>
      <i id="left" @click="scrollUpJumbo()" class="fa-solid fa-chevron-left" style="color: #f9aa01;"></i>
    </section> -->
    <section class="section-carosello position-relative">
      <swiper
      :effect="'cube'"
      :direction="'vertical'"
      :loop="true"
      :speed="3000"
      :navigation="true"
      :modules="modules" 
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        pauseOnMouseEnter: true,
      }"
      :grabCursor="true"
      :cubeEffect="{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }"
      :pagination="true"
      class="mySwiper">
        <swiper-slide
          ><img
            src="/images/Vi_League_Of_Legends.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="/images/League_of_Legends_Darius.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="/images/yuumi.jpg" /></swiper-slide
        >
      </swiper>
    </section>
    <section class="container">
      <div class="row">
        <div id="delivery" class="col-3 semi-card">
          <div class="semi-card-img delivery"></div> 
          <div class="text my-border">
            <h6 class="ps-4">Free Delivery</h6>
            <p class="ps-4">Free Shipping On All Order</p>
          </div>
        </div>
        <div id="money" class="col-3 semi-card">
          <div class="semi-card-img money"></div> 
          <div class="text my-border">
            <h6 class="ps-4">Money Return</h6>
            <p class="ps-4">Back Guarantee in 7 days</p>
          </div>
        </div>
        <div id="discount" class="col-3 semi-card">
          <div class="semi-card-img discount"></div> 
          <div class="text my-border">
            <h6 class="ps-4">Member Discount</h6>
            <p class="ps-4">On every order over $130.00</p>
          </div>
        </div>
        <div id="return" class="col-3 semi-card">
          <div class="semi-card-img return"></div> 
          <div class="text">
            <h6 class="ps-4">Return Policy</h6>
            <p class="ps-4">Support 24 hours a day</p>
          </div>
        </div>
      </div>
      <div class="row">         
          <LargeCard v-for="card in store.largeCard"
          :title="card.title"
          :tag="card.tag"
          :img="card.img"
          />
      </div>
    </section>
    <section class="container">
      <div class="position-relative mt-5 mb-3">
        <h2 class="category">Special Category</h2>
        <div class="small-border position-absolute"></div>
      </div>
      <div class="row">
        <VerticalCard v-for="item in store.verticalCard"
        :img="item.image"
        :titolo="item.titolo"
        />
      </div>
    </section>
    <section class="container position-relative">
      <div class="row mt-5 mb-3 justify-content-between flex-column align-items-center">
        <h2 class="category">Our Product</h2>
        <div class="small-border position-absolute"></div>
        <div class="choice d-flex justify-content-evenly align-items-center">
          <div id="featured" class="col-3" :class="{'is-active': store.featured}" @click="switchOffFlags(), store.featured = true">Featured</div>
          <div id="arrival" class="col-3" :class="{'is-active': store.newArrival}" @click="switchOffFlags(), store.newArrival = true">New Arrival</div>
          <div id="sellers" class="col-3" :class="{'is-active': store.bestSellers}" @click="switchOffFlags(), store.bestSellers = true">Best Sellers</div>
        </div>
      </div>
      <div ref="slider" class="row overflow-hidden flex-nowrap mt-2" >  
        <ProductCard v-for="item in store.featuredProducts" v-if="store.featured"
        :img="item.img"
        :name="item.name"
        :rate="item.rate"
        :price="item.price"
        :sale="item.sale"
        :discount="item.discount"
        :discPrize="item.discountedPrice"
        />
        <ProductCard v-for="item in store.newArrivalProducts" v-else-if="store.newArrival"
        :img="item.img"
        :name="item.name"
        :rate="item.rate"
        :price="item.price"
        :sale="item.sale"
        :discount="item.discount"
        :discPrize="item.discountedPrice"
        />
        <ProductCard v-for="item in store.bestSellersProduct" v-else-if="store.bestSellers"
        :img="item.img"
        :name="item.name"
        :rate="item.rate"
        :price="item.price"
        :sale="item.sale"
        :discount="item.discount"
        :discPrize="item.discountedPrice"
        />
        <div id="prev" @click="scrollLeft(0, - 330)"></div>
        <div id="next" @click="scrollRight(0, + 330)"></div>       
      </div>
      <div class="row">
        <LargeCard v-for="card in store.largeCard2"
          :title="card.title"
          :tag="card.tag"
          :img="card.img"
          />
      </div> 
    </section>
    <section class="container position-relative">
      <div class="row mt-5 mb-3 justify-content-between flex-column align-items-center">
        <h2 class="category">Deal Of The Day</h2>
        <div class="small-border position-absolute"></div>
        <div class="choice d-flex justify-content-evenly align-items-center">
          <div class="col-3 p-3">Days {{ this.dayCounter }}</div>
          <div class="col-3 p-3 borderino">Hours {{ this.hoursCounter }}</div>
          <div class="col-3 p-3 border-rightino">Mins {{ this.minsCounter }}</div>
          <div class="col-3 p-3">Secs {{ this.secsCounter }}</div>
        </div>
      </div>
      <div ref="slider2" class="row overflow-hidden flex-nowrap mt-5" >  
        <ProductCard v-for="item in store.bestSellersProduct"
        :img="item.img"
        :name="item.name"
        :rate="item.rate"
        :price="item.price"
        :sale="item.sale"
        :discount="item.discount"
        :discPrize="item.discountedPrice"
        />
        <div id="prev" class="two" @click="scrollLeft2(0, - 330)"></div>
        <div id="next" class="two" @click="scrollRight2(0, + 330)"></div>
      </div>
    </section>
    <section id="the-division" class="container position-relative">
      <div id="grab" class="row overflow-hidden flex-nowrap" ref="quotes">
        <SliderQuotes v-for="item in store.parallaxSlider"
        :name="item.name"
        :position="item.position"
        :img="item.image"
        :quote="item.quote"
        />
      </div>
      <div class="dot-container">
        <div class="dot" :class="{'active-dot': store.slideOneActive}" @click="scrollQuotes(0, 0), switchDotFlags()"></div>
        <div class="dot" :class="{'active-dot': store.slideTwoActive}" @click="scrollQuotes(0, + 1325), switchDotFlags2()"></div>
        <div class="dot" :class="{'active-dot': store.slideThreeActive}" @click="scrollQuotes(0, + 2700), switchDotFlags3()"></div>
      </div>
    </section>
    <section class="container position-relative pb-3 b-bottom">
      <div class="row mt-5 mb-3 d-flex justify-content-between flex-column align-items-center">
        <h2 class="category">New Game Blogs</h2>
        <div class="small-border position-absolute"></div>
      </div>
      <div ref="blogs" class="row overflow-hidden flex-nowrap mt-2"> 
        <BlogsCard v-for="item in store.gameBlogs" 
        :date="item.date"
        :comments="item.comments"
        :desc="item.desc"
        :img="item.image"
        />
        <div id="prev" class="three" @click="scrollLeftBlogs(0, - 440)"></div>
        <div id="next" class="three" @click="scrollRightBlogs(0, + 440)"></div>   
      </div>
    </section>
    <section class="container position-relative">
      <div ref="brand" class="row overflow-hidden flex-nowrap mt-2">
        <BrandCard v-for="item in store.brandImages"
        :img="item.image"
        :name="item.name"
        />
        <div id="prev" @click="scrollLeftBrand(0, - 284)"></div>
        <div id="next" @click="scrollRightBrand(0, + 284)"></div> 
      </div>
    </section>
    <footer>
      <FooterComponent />
    </footer>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCube, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-cube';
import 'swiper/scss/pagination';
import { store } from './assets/data/store'
import HeaderComponent from './components/HeaderComponent.vue'
import VerticalCard from './components/VerticalCard.vue'
import ProductCard from './components/ProductCard.vue'
import SliderQuotes from './components/SliderQuotes.vue'
import BlogsCard from './components/BlogsCard.vue'
import BrandCard from './components/BrandCard.vue'
import FooterComponent from './components/FooterComponent.vue'
import LargeCard from './components/LargeCard.vue'
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      VerticalCard,
      ProductCard,
      SliderQuotes,
      BlogsCard,
      BrandCard,
      FooterComponent,
      LargeCard,
      Swiper,
      SwiperSlide,
    },
    data(){
      return{
        store,
        featuredCounter: 4,
        newArrivalCounter:4,
        bestSellersCounter: 4,
        dealOfTheDayCounter: 4,
        blogsCounter: 3,
        brandCounter: 5,
        secsCounter: 59,
        minsCounter: 59,
        hoursCounter: 23,
        dayCounter: 3,
      }
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        modules: [EffectCube, Navigation, Autoplay],
        onSwiper,
        onSlideChange,
      };
    },
    methods:{
      switchOffFlags(){
        store.featured = false
        store.newArrival = false
        store.bestSellers = false
      },
      scrollLeft(x, y){
        const slider = this.$refs.slider
        slider.scrollBy({
          top: x,
          left: y,
          behavior : "smooth"
        });
        if(store.featured){
            this.featuredCounter--
            if(this.featuredCounter < 4){
              this.featuredCounter = store.featuredProducts.length
              slider.scrollBy({
                top: 0,
                left: + 1980,
                behavior : "smooth"
              });
            }
          }else if(store.newArrival){
            this.newArrivalCounter--
            if(this.newArrivalCounter < 4){
              this.newArrivalCounter = store.newArrivalProducts.length
              slider.scrollBy({
                top: 0,
                left: + 1980,
                behavior : "smooth"
              });
            }
          }else{
            this.bestSellersCounter--
            if(this.bestSellersCounter < 4){
              this.bestSellersCounter = store.bestSellersProduct
              slider.scrollBy({
                top: 0,
                left: + 1980,
                behavior : "smooth"
              });
            }
          }
      },
      scrollRight(x, y){
        const slider = this.$refs.slider
        slider.scrollBy({
          top: x,
          left: y,
          behavior : "smooth"
        });
        if(store.featured){
          this.featuredCounter++
          if(this.featuredCounter > store.featuredProducts.length){
            this.featuredCounter = 4
            slider.scrollBy({
              top: 0,
              left: - 1980,
              behavior : "smooth"
            });
          }
        }else if(store.newArrival){
          this.newArrivalCounter++
          if(this.newArrivalCounter > store.newArrivalProducts.length){
            this.newArrivalCounter = 4
            slider.scrollBy({
              top: 0,
              left: - 1980,
              behavior : "smooth"
            });
          }
        }else{
          this.bestSellersCounter++
          if(this.bestSellersCounter > store.bestSellersProduct.length){
            this.bestSellersCounter = 4
            slider.scrollBy({
              top: 0,
              left: - 1980,
              behavior : "smooth"
            });
          }
        } 
      },
      scrollLeft2(x, y){
        const slider = this.$refs.slider2
        slider.scrollBy({
          top: x,
          left: y,
          behavior : "smooth"
      });
        this.dealOfTheDayCounter--
        if(this.dealOfTheDayCounter < 4){
          this.dealOfTheDayCounter = store.bestSellersProduct.length
          slider.scrollBy({
            top: 0,
            left: + 1980,
            behavior : "smooth"
          });
        }
      },
      scrollRight2(x, y){
        const slider = this.$refs.slider2
        slider.scrollBy({
          top: x,
          left: y,
          behavior : "smooth"
        });
          this.dealOfTheDayCounter++
          if(this.dealOfTheDayCounter > store.bestSellersProduct.length){
            this.dealOfTheDayCounter = 4
            slider.scrollBy({
              top: 0,
              left: - 1980,
              behavior : "smooth"
            });
          } 
      },
      scrollLeftBlogs(x, y){
        const slider = this.$refs.blogs
        slider.scrollBy({
          top: x,
          left: y,
          behavior : "smooth"
        });
        this.blogsCounter--
        if(this.blogsCounter < 3){
          this.blogsCounter = store.gameBlogs.length
          slider.scrollBy({
            top: 0,
            left: + 3100,
            behavior : "smooth"
          });
        }
      },
      scrollRightBlogs(x, y){
        const slider = this.$refs.blogs
        slider.scrollBy({
          top: x,
          left: y,
          behavior : "smooth"
        });
        this.blogsCounter++
        if(this.blogsCounter > store.gameBlogs.length){
          this.blogsCounter = 3
          slider.scrollBy({
            top: 0,
            left: - 3100,
            behavior : "smooth"
          });
        } 
      },  
      scrollQuotes(y, x){
        const slider = this.$refs.quotes
        slider.scrollTo({
          top: y,
          left: x,
          behavior: "smooth"
        });
      },
      scrollLeftBrand(x, y){
        const slider = this.$refs.brand
        slider.scrollBy({
          top: x,
          left: y,
          behavior : "smooth"
        });
        this.brandCounter--
        if(this.brandCounter < 5){
          this.brandCounter = store.brandImages.length
          slider.scrollBy({
            top: 0,
            left: + 1200,
            behavior : "smooth"
          });
        }
      },
      scrollRightBrand(x, y){
        const slider = this.$refs.brand
        slider.scrollBy({
          top: x,
          left: y,
          behavior : "smooth"
        });
        this.brandCounter++
        if(this.brandCounter > store.brandImages.length){
          this.brandCounter = 5
          slider.scrollBy({
            top: 0,
            left: - 1200,
            behavior : "smooth"
          });
        } 
      }, 
      scrollBrandAutomatic(){
        setInterval(() =>{
          const slider = this.$refs.brand
          slider.scrollBy({
            top: 0,
            left: + 400,
            behavior : "smooth"
          });
          this.brandCounter++
          if(this.brandCounter > store.brandImages.length){
            this.brandCounter = 5
            slider.scrollBy({
              top: 0,
              left: - 1200,
              behavior : "smooth"
            });
          } 
        }, 2000)
        
        
      },
      switchDotFlags(){
        store.slideOneActive = true
        store.slideTwoActive = false
        store.slideThreeActive = false
      },
      switchDotFlags2(){
        store.slideOneActive = false
        store.slideTwoActive = true
        store.slideThreeActive = false
      },
      switchDotFlags3(){
        store.slideOneActive = false
        store.slideTwoActive = false
        store.slideThreeActive = true
      },
      scrollDownJumbo(){
        const slider = this.$refs.jumbo
        slider.scrollBy({
          top: + 833,
          left: 0,
          behavior : "smooth"
        });
      },
      scrollUpJumbo(){
        const slider = this.$refs.jumbo
        slider.scrollBy({
          top: - 833,
          left: 0,
          behavior : "smooth"
        });
      },    
      scrollTop(){
        if(window.scrollY >= 1000){
          this.store.isScrolled = true
        }else if(window.scrollY < 1000){
            this.store.isScrolled = false
        }
        // this. outlineAssign()
      },
      windowTop(){
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      },
      timeTrack(){
        setInterval(()=>{
          this.secsCounter--
          if(this.secsCounter < 1){
            this.secsCounter = 59
            this.minsCounter--
          }

          if(this.minsCounter < 1){
            this.minsCounter = 59
            this.hoursCounter--
          }
        }, 1000)
      }
      // outlineAssign(){
      //   const rombo = this.$refs.rombo
      //   setInterval(()=> {
      //     rombo.classList.add('my-outline')
      //   }, 1000)
      //   setInterval(()=> {
      //     rombo.classList.remove('my-outline')
      //   }, 2000)
      // }
    },
    created(){
      window.addEventListener('scroll', this.scrollTop)
      this.scrollBrandAutomatic()
      this.timeTrack()
    },
  }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;  
    .section-carosello{
      margin-top: 200px;
      margin-left: 10%;
      margin-right: 10%;
      margin-bottom: 80px;
      width: 80%;
      height: 80vh;
    }
    .swiper {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      // margin-left: -150px;
      // margin-top: -150px;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
    }

    #jumbosello{
      width: 100%;
      height: 100vh;
      position: relative;
      

      // .wrapper{
      //   overflow: hidden;
      //   display: flex;
      //   flex-direction: column;
      //   flex-wrap: nowrap;
      //   height: 100%;
      //   width: 100%;
      //   perspective: 1000px;
      //   transform-style: preserve-3d;
      //   transform: translateY(calc(1000 / 2));

        img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        
        }
      }
      i{
        position: absolute;
        top: 50%;
        font-size: 40px;
      }
      i#right{
        right: 2%;
      }
      i#left{
        left: 2%;
      }
    // #rombo-border{
    //   width: 32px;
    //   height: 32px;
    //   border: 1px solid yellow;
    // } 
    .my-outline{
      outline: 3px solid $palette_yellow;
    }
    @keyframes outline {
      0%{
        outline: 0;
      }

      50%{
        outline: 3px solid $palette_yellow;
      }

      100%{
        outline: 0;
      }
    }
    #rombo{
      width: 30px;
      height: 30px;
      transform: rotate(45deg);
      position: fixed;
      bottom: 10px;
      right: 10px;
      background-color: $palette_yellow;
      border: 2px solid black;
      transition: all 0.5s linear;
      animation: outline 2s infinite;
      cursor: pointer;

      i{
        transform: rotate(-45deg);
        font-size: 15px;
        color: black;
        // padding-left: 15px;
        // padding-bottom: 10px;
        position: relative;
        top: 2px;
        left: 7px;
      }
    }

    .b-bottom{
      border-bottom: 1px solid #9f9baf73;
    }

    #prev{
      width: 32px;
      height: 32px;
      background-image: url(/images/arrow.png);
      background-position: left 32px;
      position: absolute;
      top: 32%;
      left: -25px;
      cursor: pointer;
      transition: background-position 0.1s linear;

      &:hover{
        background-position: left 81px;
        transition: all 0.1s linear;
      }
    }
    #prev.two{
      top: 50%;
    }
    #prev.three{
      top: 45%;
    }
    #next{
      width: 32px;
      height: 32px;
      background-image: url(/images/arrow.png);
      background-position: right 32px;
      position: absolute;
      top: 32%;
      right: -25px;
      cursor: pointer;
      transition: background-position 0.1s linear;

      &:hover{
        background-position: right 81px;
        transition: all 0.1s linear;
      }
    }
    #next.two{
      top: 50%;
    }
    #next.three{
      top: 45%;
    }
    #the-division{
      background-image: url(/images/parallax.jpg);
      background-size: cover;
      height: 500px;

      .dot-container{
        width: 60px;
        height: 30px;
        display: flex;
        justify-content: space-evenly;
        position: absolute;
        left: 47%;
        bottom: 3%;
        .dot{
          width: 10px;
          height: 10px;
          background-color: white;
          overflow: hidden;
          border-radius: 50%;

          &:hover{
            background-color: $palette_yellow;
            transform: scale(110%);
            transition: all 0.2s ease;
          }
        }
        .active-dot{
          background-color: $palette_yellow;
          width: 12px;
          height: 12px;
          padding-bottom: 5px;
        } 
      }
    }
    .choice{
      width: 500px;
      color: white;
      border: 1px solid #9f9baf73;
      text-align: center;
      font-size: 1em;
      cursor: pointer;
      padding: 0;
      font-family: 'Oxanium', sans-serif;

      .borderino{
        border-left: 1px solid #9f9baf73;
        border-right: 1px solid #9f9baf73;
      }
      .border-rightino{
        border-right: 1px solid #9f9baf73;
      }
      .is-active{
        color: $palette_yellow;
      }

      #featured{
        padding: 15px 15px;
        width: calc(100% / 3);

        &:hover{
        color: $palette_yellow;
        transition: color 0.3s linear;
      }
      }
      #sellers{
        padding: 15px 15px;
        width: calc(100% / 3);

        &:hover{
        color: $palette_yellow;
        transition: color 0.3s linear;
      }
      }
      #arrival{
        padding: 15px 15px;
        width: calc(100% / 3);
        border-left: 1px solid #9f9baf73;
        border-right: 1px solid #9f9baf73;

        &:hover{
        color: $palette_yellow;
        transition: color 0.3s linear;
      }
      }

    }
    .semi-card{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 250px;

      &:hover h6{
        color: $palette_yellow;
      }
      .semi-card-img{
        margin: 20px 0;
        background-image: url(/images/service-icon.png);
        background-repeat: no-repeat;
        width: 70px;
        height: 40px;
      }
      .text{
        color: white;
        width: 90%;

        h6{
          padding: 0;
          margin: 0;
          font-weight: bold;
          font-family: 'Oxanium', sans-serif;
        }
        p{
          margin: 0;
          font-size: 0.9em;
          padding-top: 5px;
        }
      }
      .delivery{
        background-position: center -110px;
        transition: all 0.4s ease;
      }
      .money{
        background-position: center -335px;
        transition: all 0.4s ease;
      }
      .discount{
        background-position: center -563px;
        transition: all 0.4s ease;
      }
      .return{
        background-position: center -788px;
        transition: all 0.4s ease;
      }
      .my-border{
        border-right: 1px solid rgba(128, 128, 128, 0.5);
      }
    }
    #delivery:hover .semi-card-img{ 
        background-position: center  3px;
        transition: all 0.4s ease;
    }
    #money:hover .semi-card-img{ 
        background-position: center  -222px;
        transition: all 0.4s ease;
    }
    #discount:hover .semi-card-img{ 
        background-position: center  -450px;
        transition: all 0.4s ease;
    }
    #return:hover .semi-card-img{ 
        background-position: center  -675px;
        transition: all 0.4s ease;
    }
    .category{
      color: white;
      text-align: center;
      font-family: 'Oxanium', sans-serif;
      padding: 20px 0;
    }
    .small-border{
      display: flex;
      justify-content: center;
      width: 40px;
      border-bottom: 2px solid $palette_yellow;
      top: 65px;
      left: 48%;
    }
</style>
