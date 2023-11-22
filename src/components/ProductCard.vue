<template>
    <div class="col-3 my-div">
        <div class="my-card-img">
            <img :src="img" :alt="name">
            <div class="non-entra" v-show="sale">-{{ discount }}%</div>
        </div>
        <div class="my-card-text">
            <div class="py-2 px star">
                <i :class="{'fa-solid fa-star yellow-star': rate > 0, 'fa-solid fa-star grey-star': rate === 0}"></i>
                <i :class="{'fa-solid fa-star yellow-star': rate > 1, 'fa-solid fa-star grey-star': rate < 2}"></i>
                <i :class="{'fa-solid fa-star yellow-star': rate > 2, 'fa-solid fa-star grey-star': rate < 3}"></i>
                <i :class="{'fa-solid fa-star yellow-star': rate > 3, 'fa-solid fa-star grey-star': rate < 4}"></i>
                <i :class="{'fa-solid fa-star yellow-star': rate > 4, 'fa-solid fa-star grey-star': rate < 5}"></i>
            </div>
            <h6>{{ name }}</h6>
            <span :class="{'discounted-price': sale}">€{{ price }}.00</span>
            <span v-show="sale">€{{ discPrize }}.00</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductCard',
        props:{
            img:{
                type: String,
                required: true,
            },
            name:{
                type: String,
                required: false,
            },
            rate:{
                type: Number,
                required: true,
            },
            sale:{
                type: Boolean,
                required: true,
            },
            discount:{
                type: Number,
                required: false,
            },
            discPrize:{
                type: Number,
                required: false,
            },
            price:{
                type: Number,
                required: true
            }
            
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;  
    .yellow-star{
        color: $palette_yellow;
    }
    .grey-star{
        color: #bbbbbb;
    }
    .non-entra {
        position: absolute;
        top: 10px;
        left: 25px;
        width: 45px;
        height: 24px;
        line-height: 24px;
        transform: skew(-20deg);
        background: $palette_yellow;
        z-index: 10;
        text-align: center;
        font-weight: bold;
        font-size: 0.8em;
    }

    .my-div{
        height: 500px;
        position: relative;
        .my-card-img{
            height: 60%;

            img{
                width: 100%;
            }
        }
        .my-card-text{
            background-color: #170f1f;
            height: 20%;
            z-index: 100;

            .star{
                font-size: 0.8em;
                padding: 5px;
            }

            h6{
                color: white;
                font-family: 'Oxanium', sans-serif;
                padding: 0 5px;
            }
            span{
                color: $palette_yellow;
                padding: 0 5px;
                font-family: 'Oxanium', sans-serif;
            }
            .discounted-price{
                text-decoration: line-through;
                color: white;
                font-family: 'Oxanium', sans-serif;
            }
        }
    }

</style>