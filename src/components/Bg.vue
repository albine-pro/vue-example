<template>
    <div class="bg">
      <div class="bg__block_1"></div>
      <div class="bg__block_2"></div>
      <div class="bg__block_3">
        <div v-bind:class="{ anim: $store.state.detailsPage }"></div>
      </div>
    </div>		
</template>

<script>
export default {
  name: "Bg"
};
</script>

<style lang="scss">

@import '../assets/scss/base';


  .bg{

      display: flex;
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

    &__block_1{

        width: 20%; 
        height: 100%; 
        background-color: $color_4; 


    }

    &__block_2{

       width: 50%; 
       height: 100%; 
       background-color: $color_5;

    }

    &__block_3{

       width: 30%; 
       height: 100%; 
       background-color: $color_5;
       position: relative;

       div{
        width: 100%; 
        height: 100%; 
        background-color: $color_3;
        position: absolute;
        top:0;
        left:0;
        transition: all .5s;

        &.anim{
          transform: translateX(100%);
        }

       }

    }


  }


</style>
