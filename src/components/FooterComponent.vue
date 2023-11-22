<template>
    <div class="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <ul id="icons">
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
                <div class="col-3 d-flex align-items-center flex-column position-relative">
                    <ul>
                        <li v-for="item in store.footer[3].newsletter">
                            <h4 v-if="item.title">{{ item.name }}</h4>
                            <a v-else :href="item.url">{{ item.name }}</a>
                        </li>
                    </ul>
                    <input type="text">
                    <img src="/images/newsletter.png" alt="Arrow">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-12 col-md-4 col-lg-2 text w-25">
                    <p class="text-light">Copyright 2023 Codezeel </p>
                </div>
                <div id="pay" class="col-12 col-md-4 col-lg-2 d-flex justify-content-between align-items-center">
                    <img class="visa" src="/images/payments.png" alt="payments">
                    <img class="master" src="/images/payments.png" alt="payments">
                    <img class="paypal" src="/images/payments.png" alt="payments">
                    <img class="w" src="/images/payments.png" alt="payments">
                    <img class="last" src="/images/payments.png" alt="payments">
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

    .container{
        border-bottom: 1px solid $small_text;
        
        .row{
            padding: 100px 0 0 0;

            #pay{
                width: 200px;
                height: 20px;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover; 
                }
                .visa{
                    object-position: center top;
                }
                .master{
                    object-position: center -35px;
                }
                .paypal{
                    object-position: center -100px;
                }
                .w{
                    object-position: center -130px; 
                }
                .last{
                    object-position: center -165px;
                }

            }
            .col-3{
                input{
                    width: 80%;
                }
                img{
                    width: 20px;
                    height: 20px;
                    object-fit: cover;
                    object-position: bottom;
                    position: absolute;
                    bottom: 40%;
                    right: 15%;
                    z-index: 100;
                }
                ul{
                    list-style: none;

                    li{
                        padding: 5px 0;
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
                #icons{
                    
                    li{
                        line-height: 1em;

                        &::marker{
                            font-size: 10px;
                        }
                        &:nth-child(2){
                            list-style-image: url(/images/geo-location_.png);
                            list-style-position: inside;
                            text-wrap: balance;  
                        }
                        &:nth-child(3){
                            list-style-image: url(/images/round-phone_.png);
                            list-style-position: inside;
                            text-wrap: balance; 
                        }
                        &:last-child{
                            list-style-image: url(/images/mail_.png);
                            list-style-position: inside;
                            text-wrap: balance;  
                        }
                    }
                }
            }
        }
    }
}
</style>