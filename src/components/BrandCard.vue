<template>
    <div class="col-3 my-div">
        <img :src="img" :alt="name">
    </div>
</template>

<script>
    export default {
        name: 'BrandCard',
        props:{
            img: String,
            name: String,
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    .my-div{
        width: 260px;

        img{
            width: 60%;
            padding: 20px 0;
        }
    }
</style>