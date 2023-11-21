<template>
    <div class="col-3">
        <img :src="img" :alt="titolo">
        <div>
            <h4>{{ titolo }}</h4>
            <p>Shop Now</p>
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
    div{
        height: 500px;

        img{
            width: 100%;
        }
        div{
            position: absolute;
            height: 70px;
            background-color: rgba(0, 0, 0, 0.418);

            h4{
                font-family: 'Oxanium', sans-serif;
            }
            p{
                color: $palette_yellow;
                text-decoration: underline;
            }
        }
    }
</style>