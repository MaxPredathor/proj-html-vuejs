<template>
    <div class="wrapper">
        <div class="container">
            <div id="wishlist" class="row d-flex justify-content-between align-content-center py-3">
                <div class="col-6 col-md-3 col-lg-3 ">
                    <ul class="d-flex justify-content-between align-content-center gap-1">
                        <li>Wishlist(0)</li>
                        <span class="line-separator">|</span>
                        <li>Need Help ? <i class="fa-solid fa-chevron-down"></i></li>
                    </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 ">
                    <ul class="d-flex">
                        <li>Call 24/7 .800-8764-987</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="separator"></div>
        <div class="container">
            <div id="logo-nav" class="row d-flex justify-content-between align-items-center">
                <div class="col-3 col-md-2 col-lg-1">
                    <img src="/images/logo.png" alt="Logo">
                </div>
                <div class="col-6 col-md-6 col-lg-6">
                    <ul class="d-flex justify-content-evenly gap-3 pt-4">
                        <li v-for="(item, index) in store.navbar">
                            <a :href="item.url">{{ item.title }}</a>
                            <div>
                                <p>{{ item.options.name }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-3 col-md-2 col-lg-3">
                    <ul class="d-flex justify-content-evenly gap-1">
                        <li><i class="fa-solid fa-magnifying-glass"></i></li>
                        <li><i class="fa-regular fa-user"></i></li>
                        <li><i class="fa-solid fa-bag-shopping"><span>(0)£0.00</span></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../assets/data/store'
    export default {
        name: 'HeaderComponent',
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
        background-color: $palette_purple;
        color: $palette_white;

        ul{
            list-style: none;
            color: $small_text;

            li{

                &:hover{
                    color: $palette_yellow;
                }

                span{
                    color: $palette_yellow;
                    padding-left: 5px;
                    font-size: 0.8em;
                }
            }
        }
    }

    a{
        text-decoration: none;
        color: $small_text;
        font-family: 'Oxanium', sans-serif;    
        font-size: 1.2em; 

        &:hover{
            color: $palette_yellow;
        }
    }
    #separator{
        width: 100%;
        border-bottom: 1px solid rgba(128, 128, 128, 0.5);
    }
    .line-separator{
        color: rgba(128, 128, 128, 0.5);
        font-size: 1em;
    }

</style>