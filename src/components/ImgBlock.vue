<template>
  <div class="img_block" v-bind:class="{ anim: detailsPage }">
    <transition 
       name="main-img"
       enter-active-class="animated bounceInDown"  
       leave-active-class="animated bounceOutDown"  
       mode="out-in"
      >
      <img   
        :key="activeModel.name"
        :src="require('@/assets/img/' +  activeModel.name + '.png')"
        :alt="activeModel.name"
      > 
    </transition>  
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  computed: { ...mapState( [ 'activeModel', 'detailsPage' ] ) }
};
</script>

<style lang="scss">

@import '../assets/scss/base';

  .img_block{

    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    right: 22vw;
    width: 220px;
    z-index: 1000;
    transition: all .5s;

    &.anim{
      width: 170px;
      transform: translate(-50%,0) rotate(90deg);
      left: 50%;
    }

        
    .main-img-move { 
      transition: transform .5s; 
    } 


     img{
      width: 100%;
    }
  }

</style>
