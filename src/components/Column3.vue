<template>
    <div class="column__3" v-bind:class="{ __details_page: detailsPage, __show_menu_details: show_menu_details }">
        <div class="close_detalis" @click="$emit('hideMenuDetails')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                <path d="M464 256c0-114.875-93.125-208-208-208S48 141.125 48 256s93.125 208 208 208 208-93.125 208-208zm-272 0l96-96v192l-96-96z" />
            </svg>
        </div>
        <div class="smal_menu" v-bind:class="{  localization_h:  detailsPage  }">
            <div class="localization">
                <a href="javascript:void(0)">RU</a>
                <a href="javascript:void(0)" class="active">EN</a>
                <a href="javascript:void(0)">DE</a>
            </div>
            <a href="javascript:void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                    <path fill="#eceff1" d="M24 44c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4zm12-12V22c0-6.15-3.27-11.28-9-12.64V8c0-1.66-1.34-3-3-3s-3 1.34-3 3v1.36c-5.73 1.36-9 6.49-9 12.64v10l-4 4v2h32v-2l-4-4zm-4 2H16V22c0-4.97 3.03-9 8-9s8 4.03 8 9v12z"></path>
                </svg>
            </a>
        </div>
        <router-view name="info_block" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
      show_menu_details: Boolean
  },
  computed: { ...mapState( [ 'detailsPage' ] ) }
};
</script>

<style lang="scss">

@import '../assets/scss/base';

  .column__3{

         background: transparent;
         width: 30%;
         position: relative;
         z-index: 2;

         .smal_menu{
             position: absolute;
             top: 20px;
             right: 30px;
             display: flex;
             align-items: center;
             
             

            .localization{

                margin: 0 40px;

                .active{
                  font-weight: 600;
                  }

            a{
                  color: $color_5;
                  font-family: $poiret;
                  margin: 0 5px;

                  &:not(.active){

                      opacity: .5;

                  }
                  
              }

            }




              &.localization_h{

                a{

                  color: $color_1;
                  opacity: 1!important;

                  svg{
                    stroke: $color_1;
                  }

                }

              }


        }


      &.__details_page{

        width: 20%;

      }


         
  }

</style>
