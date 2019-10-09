<template>
    <div class="details_page" v-bind:class="{ anim: detailsPage }">
        <router-link v-if="!detailsPage" :to="{ name: 'details', params: { model: activeModel.name } }" class="button btn1">details</router-link>
        <router-link v-else to="/" class="button btn1">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="white">
                <path d="M40 22H15.66l11.17-11.17L24 8 8 24l16 16 2.83-2.83L15.66 26H40v-4z" />
            </svg>
        </router-link>
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

  .details_page{
  
     position: absolute;
     bottom: 5%;
     right: 10%;
     z-index: 1000;
     transition: all .5s;

     &.anim{

        bottom: 10%;
        right: 10%;

        .button{

              border-radius: 50%;
              padding: 20px;
              width: 60px;
              height: 60px;

        }

      }

    .button {
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      padding: 8px 20px;
      color: $color_5;
      text-align: center;
      text-shadow: 0 1px rgba(0,0,0,.3);
      font-weight: 400;
      font-size: 14px;
      cursor: pointer;
      -khtml-border-radius: 3px;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
      text-decoration: none;
      letter-spacing: 1px;
      text-transform: uppercase;
      position: relative;
      box-sizing: border-box;
      border: none;
      outline: none;
      font-family: $poiret;
      transition: all .5s;

      &:hover, &:active{

        outline: medium none;
        color: $color_5;
        text-decoration: none;
        box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15); 

      }

    }


    .btn1{

       background-color: $color_2;

      &:link, &:visited{

         background-color: $color_2;

      }

      
    }


  }

</style>
