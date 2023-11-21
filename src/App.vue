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
          <div class="col-3 delivery">
            <img src="/images/service-icon.png" alt="">
            <h4 class="ps-4">Free Delivery</h4>
            <p class="ps-4">Free Shipping On All Order</p>
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
  </main>
</template>

<script>
import { store } from './assets/data/store'
import HeaderComponent from './components/HeaderComponent.vue'
import LargeCard from './components/LargeCard.vue'
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      LargeCard
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
    .delivery{
      background-image: url(/images/service-icon.png);
      background-position: center -100px;
      background-repeat: no-repeat;
      
    }


</style>
