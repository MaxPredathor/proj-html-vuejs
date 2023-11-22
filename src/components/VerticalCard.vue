<template>
    <div class="col-4">
        <div class="wrapperino">
            <img :src="img" :alt="titolo">
            <div id="retract"></div>
            <div id="expand"></div>
            <div class="menu">
                <h4>{{ titolo }}</h4>
                <p>Shop Now</p>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../assets/data/store'
    export default {
        name: 'VerticalCard',
        props:{
            img:{
                type: String,
                required: true
            },
            titolo:{
                type: String,
                required: true
            }
        },
        data(){
            return{
                store,
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    .col-4{
        position: relative;
        overflow: hidden;
        .wrapperino{
            width: 100%;
            height: 500px;

            &:hover #expand{
                height: 100%;
                opacity: 0;
                transition: all 1.3s linear;
            }
            &:hover #retract{
                height: 100%;
                opacity: 0;
                transition: all 1.3s linear;
            }
            &:hover .menu{
                background-color: #170f1f;
                transition: all 0.5s linear;
            }

            img{
                width: 100%;
                
            }
            #retract{
                width: 415.99px;
                height: 0px;
                background-color: rgba(255, 255, 255, 0.2);
                position: absolute;
                bottom: 50%;
            }
            #expand{
                width: 415.99px;
                height: 0px;
                background-color: rgba(255, 255, 255, 0.2);
                position: absolute;
                top: 50%;
            }
            .menu{
                position: absolute;
                bottom: 0%;
                height: 70px;
                width: 415.99px;
                background-color:  #170f1fbf;

                h4{
                    font-family: 'Oxanium', sans-serif;
                    color: white;
                    padding: 5px 10px;
                    margin: 0;
                }
                p{
                    color: $palette_yellow;
                    text-decoration: underline;
                    padding: 5px 10px;
                    margin: 0;
                    cursor: pointer;
                }
            }
        }
        
    }
</style>