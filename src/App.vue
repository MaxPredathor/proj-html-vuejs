<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <section id="jumbosello">
      <img src="/images/cms-banner-01.jpg" alt="">
    </section>
  </main>
</template>

<script>
import { store } from './assets/data/store'
import HeaderComponent from './components/HeaderComponent.vue'
  export default {
    name: 'App',
    components: {
      HeaderComponent,
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


</style>
