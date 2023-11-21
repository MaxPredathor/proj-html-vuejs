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
        <h2>Special Category</h2>
        <div class="row">
          <VerticalCard v-for="item in store.verticalCard"
          :img="item.image"
          :titolo="item.titolo"
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
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      LargeCard,
      VerticalCard
    },
    data(){
      return{
        store,
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
        height: 870px;
        object-fit: contain;
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
</style>
