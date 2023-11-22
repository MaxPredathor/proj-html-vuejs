<template>
    <div class="col-12 d-flex flex-column align-items-center">
        <div class="overflow-hidden rounded-circle">
            <img :src="img" :alt="name">
        </div>
        <h5>{{ name }} <span>({{ position }})</span></h5>
        <p>{{ quote }}</p>
    </div>
</template>

<script>
    export default {
        name: 'SliderQuotes',
        props:{
            name:{
                type: String,
                required: true,
            },
            position:{
                type: String,
                required: true,
            },
            img:{
                type: String,
                required: true,
            },
            quote:{
                type: String,
                required: true,
            },
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;  

    .col-12{
        height: 100%;

        h5{
            color: white;
            font-family: 'Oxanium', sans-serif;
            font-size: 0.9em;
            padding: 20px 0;

            span{
                color: $palette_yellow;
            }
        }
        p{
            width: 80%;
            padding: 10px 0;
            color: #919199;
            font-size: 0.8em;
            text-align: center;
            text-wrap: balance;
        }
        .rounded-circle{
            border: 1px solid $palette_yellow;
            width: 100px;
            margin-top: 150px;

            img{
                width: 100%;
            }
            
        }

    }
    

</style>