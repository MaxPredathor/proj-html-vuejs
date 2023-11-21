<template>
    <div class="col-6 position-relative">
        <img :src="img" :alt="title">
        <div id="over-image">
            <h4 class="non-entra">{{ tag }}</h4>
            <h2 class="text-light">{{ title }}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LargeCard',
        props: {
            title: {
                type: String,
                required: true,
            },
            tag: {
                type: String,
                required: true,
            },
            img: {
                type: String,
                reqiuired: true
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;  
    .col-6{
        position: relative;

        img{
            width: 100%;
        }

        #over-image{
            width: 270px;
            position: absolute;
            top: 30%;
            left: 50%;

            h4{
                color: black;
                font-family: 'Oxanium', sans-serif;
                font-size: 30px;
                font-weight: bold;
                z-index: 100 !important;
                padding-left: 5px;
            }
            .non-entra {
                width: 200px;
                height: 40px;
                transform: skew(-20deg);
                background: $palette_yellow;
                z-index: 1 !important;
            }
            h2{
                font-size: 40px;
                font-weight: bold;
            }
        }
    }
    
</style>