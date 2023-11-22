<template>
    <div class="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <ul>
                        <li v-for="item in store.footer[0].address">
                            <h4 v-if="item.title">{{ item.name }}</h4>
                            <a v-else :href="item.url">{{ item.name }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul>
                        <li v-for="item in store.footer[1].information">
                            <h4 v-if="item.title">{{ item.name }}</h4>
                            <a v-else :href="item.url">{{ item.name }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul>
                        <li v-for="item in store.footer[2].extras">
                            <h4 v-if="item.title">{{ item.name }}</h4>
                            <a v-else :href="item.url">{{ item.name }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul>
                        <li v-for="item in store.footer[3].newsletter">
                            <h4 v-if="item.title">{{ item.name }}</h4>
                            <a v-else :href="item.url">{{ item.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../assets/data/store'
    export default {
        name: 'FooterComponent',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.wrapper{
    background-image: url(/images/footer-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;

    .container{

        .row{

            .col-3{

                ul{
                    list-style: none;


                    h4{
                        color: white;
                        font-size: 1em;
                    }
                    a{
                        text-decoration: none;
                        color: $small_text;
                        font-size: 0.8em;
                    }
                }
            }
        }

    }
}
</style>