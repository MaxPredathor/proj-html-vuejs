<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <section id="jumbosello">
      <img src="/images/cms-banner-01.jpg" alt="temp">
    </section>
    <section>
      <div class="container">
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
      </div>
    </section>
    <section>
      <div class="container">
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
      </div>
    </section>
    <section>
      <div class="container">
        <div class="position-relative mt-5 mb-3 d-flex justify-content-between flex-column align-items-center">
          <h2 class="category">Our Product</h2>
          <div class="small-border position-absolute"></div>
          <div class="choice d-flex justify-content-evenly align-items-center">
            <div id="featured" :class="{'is-active': store.featured}" @click="switchOffFlags(), store.featured = true">Featured</div>
            <div id="arrival" :class="{'is-active': store.newArrival}" @click="switchOffFlags(), store.newArrival = true">New Arrival</div>
            <div id="sellers" :class="{'is-active': store.bestSellers}" @click="switchOffFlags(), store.bestSellers = true">Best Sellers</div>
          </div>
        </div>
        <div class="row d-flex overflow-x-scroll flex-nowrap mt-2" v-if="store.featured">  
          <ProductCard v-for="item in store.featuredProducts"
          :img="item.img"
          :name="item.name"
          :rate="item.rate"
          :price="item.price"
          :sale="item.sale"
          :discount="item.discount"
          :discPrize="item.discountedPrice"
          />     
        </div>
        <div class="row d-flex overflow-x-scroll flex-nowrap mt-2" v-else-if="store.newArrival">  
          <ProductCard v-for="item in store.newArrivalProducts"
          :img="item.img"
          :name="item.name"
          :rate="item.rate"
          :price="item.price"
          :sale="item.sale"
          :discount="item.discount"
          :discPrize="item.discountedPrice"
          />     
        </div>
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
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      LargeCard,
      VerticalCard,
      ProductCard,
    },
    data(){
      return{
        store,
      }
    },
    methods:{
      switchOffFlags(){
        store.featured = false
        store.newArrival = false
        store.bestSellers = false
      }
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

    .choice{
      width: 500px;
      color: white;
      border: 1px solid $small_text;
      text-align: center;
      font-weight: bold;
      font-size: 0.8em;
      cursor: pointer;

      .is-active{
        color: $palette_yellow;
      }

      #featured{
        padding: 20px 15px;
        width: calc(100% / 3);

        &:hover{
        color: $palette_yellow;
        transition: color 0.3s linear;
      }
      }
      #sellers{
        padding: 20px 15px;
        width: calc(100% / 3);

        &:hover{
        color: $palette_yellow;
        transition: color 0.3s linear;
      }
      }
      #arrival{
        padding: 20px 15px;
        width: calc(100% / 3);
        border-left: 1px solid $small_text;
        border-right: 1px solid $small_text;

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
