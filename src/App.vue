<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <section id="jumbosello">
      <img src="/images/cms-banner-01.jpg" alt="temp">
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
          <div class="col-3 p-3">days</div>
          <div class="col-3 p-3">hours</div>
          <div class="col-3 p-3">mins</div>
          <div class="col-3 p-3">secs</div>
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
      <div class="row overflow-hidden flex-nowrap" ref="quotes">
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
    <section class="container position-relative">
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
  </main>
</template>

<script>
import { store } from './assets/data/store'
import HeaderComponent from './components/HeaderComponent.vue'
import LargeCard from './components/LargeCard.vue'
import VerticalCard from './components/VerticalCard.vue'
import ProductCard from './components/ProductCard.vue'
import SliderQuotes from './components/SliderQuotes.vue'
import BlogsCard from './components/BlogsCard.vue'
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      LargeCard,
      VerticalCard,
      ProductCard,
      SliderQuotes,
      BlogsCard,
    },
    data(){
      return{
        store,
        featuredCounter: 4,
        newArrivalCounter:4,
        bestSellersCounter: 4,
      }
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
      },
      scrollRight(x, y){
        const slider = this.$refs.slider
        slider.scrollBy({
          top: x,
          left: y,
          behavior : "smooth"
        });
        // if(store.featured){
        //   this.featuredCounter++
        //   if(this.featuredCounter > store.featuredProducts.length){
        //     this.featuredCounter = 4
        //     slider.scrollBy({
        //       top: 0,
        //       left: - 1980,
        //       // behavior : "smooth"
        //     });
        //   }
        // }else if(store.newArrival){
        //   this.newArrivalCounter++
        //   if(this.newArrivalCounter > store.newArrivalProducts.length){
        //     this.newArrivalCounter = 4
        //     slider.scrollBy({
        //       top: 0,
        //       left: - 1980,
        //       // behavior : "smooth"
        //     });
        //   }
        // }else{
        //   this.bestSellersCounter++
        //   if(this.bestSellersCounter > store.bestSellersProduct.length){
        //     this.bestSellersCounter = 4
        //     slider.scrollBy({
        //       top: 0,
        //       left: - 1980,
        //       // behavior : "smooth"
        //     });
        //   }
        // } 
      },
      scrollLeft2(x, y){
        const slider = this.$refs.slider2
        slider.scrollBy({
          top: x,
          left: y,
          behavior : "smooth"
      });
      },
      scrollRight2(x, y){
        const slider = this.$refs.slider2
        slider.scrollBy({
          top: x,
          left: y,
          behavior : "smooth"
        });
      },
      scrollLeftBlogs(x, y){
        const slider = this.$refs.blogs
        slider.scrollBy({
          top: x,
          left: y,
          behavior : "smooth"
      });
      },
      scrollRightBlogs(x, y){
        const slider = this.$refs.blogs
        slider.scrollBy({
          top: x,
          left: y,
          behavior : "smooth"
        });
      },  
      scrollQuotes(y, x) {
        const slider = this.$refs.quotes
        slider.scrollTo({
          top: y,
          left: x,
          behavior: "smooth"
        });
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
    },
  }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;  
    #jumbosello{
      width: 100%;

      img{
        width: 100%;
        object-fit: contain;
      }
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
      font-weight: bold;
      font-size: 0.8em;
      cursor: pointer;
      padding: 0;

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
