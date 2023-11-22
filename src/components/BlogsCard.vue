<template>
    <div class="col-4 my-div">
        <div>
            <img :src="img" alt="PlaceHolder Img">
        </div>
        <div class="text">
            <p><i class="fa-regular fa-calendar-days"></i>{{ date }} <i class="fa-regular fa-comments"></i> {{ comments }} Comment</p>
            <div class="desc-container">
                <p>{{ desc }}</p>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'BlogsCard',
        props:{
            date:{
                type: String,
                required: true,
                default: 'No date Found'
            },
            comments:{
                type: Number,
                required: true,
            },
            desc:{
                type: String,
                required: true,
            },
            img:{
                type: String,
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;  
.my-div{

    img{
        width: 100%;
    }

    .text{
        
        p{
            color: $small_text;
            padding: 10px 0px;
            font-size: 0.9em;

            i{
                color: $palette_yellow;
                padding-right: 10px;
                font-size: 0.8em;
            }
        }
        .desc-container{
            font-family: 'Oxanium', sans-serif;

            p{
                font-weight: bold;
                color: white;
                font-size: 1em;
            }
        }
    }
}


</style>