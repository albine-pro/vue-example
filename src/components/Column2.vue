<template>
	<div class="column__2" v-bind:class="{ __details_page: detailsPage }">
    <router-view name="title_info" />
    <router-view name="tabs" />
    <router-view name="models" />
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: { ...mapState( [ 'detailsPage' ] ) }, 
};
</script>

<style lang="scss">

@import '../assets/scss/base';

.column__2{

       background: $color_5;
       width: 50%;
       z-index: 2;

       &.__details_page{
        width: 60%;
       }

           .title__1{

              display: flex;
              padding: 30px 0;
              justify-content: space-between;
              align-items: center;

                  div{

                    &:first-of-type{
                      
                      font-size: 46px;
                      font-family: $poiret;
                      font-weight: 600;
                      letter-spacing: 3px;
                      margin-left: 40px;

                      }


                 }

          }


        .tabs_block{

          margin: 20px 0 0 50px;
          position: relative;
          width: 100%;

          .tab-button {     
            padding: 6px 10px;      
            border-radius: 3px;             
            cursor: pointer;        
            margin-bottom: -1px;  
            border: none;
            outline: none;
            background: none;   
            transition: all .3s;    
            margin-right: 20px;
            font-size: 12px;
            color: $color_1;

            &.active{

                   background: $color_3;
                   color: $color_5;

            }   
          }     
              
            
          .tab {          
              padding: 10px;  
              margin: 20px 0;
              height: 150px;
              width: 70%;

              .miles_block{  

                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                position: relative;         

                &__sub{

                  width: 5px;
                  height: 90%;
                  position: relative;

                  &__line{

                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    background-color: $color_4;
                    bottom: 20px;
                    left: 0;
                    border-radius: 3px;
                  
                  }

                  &__cover{
                    position: absolute;
                    width: 100%;
                    // height: 50%;
                    z-index: 1;
                    background-color: $color_2;
                    bottom: 20px;
                    left: 0;
                    border-radius: 3px;
                    transition: height .3s;
                  }


              }


            }



                &__time{

                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                color: $color_1;

                .title{

                  font-size: 12px;

                }
                }

          }     
                
          .component-fade-enter-active, .component-fade-leave-active {      
            transition: opacity .3s ease;     
          }     
          .component-fade-enter, .component-fade-leave-to     
          /* .component-fade-leave-active до версии 2.1.8 */ {      
            opacity: 0;     
          }     


          .miles{

            position: absolute;
            top: -5px;
            right: 30%;
            font-size: 24px;
            font-weight: 600;

          }           


        }


    .auto_list__block{

        width: 85%;
        margin: 40px auto;
        position: relative;



        h4{
        
        font-size: 16px;
        padding: 10px 0 0 0;

        }

        &_w{

          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          


          &_i{
                  padding: 10px;
                  transition: all .3s;
                  

              &__info{

               width: 80%;
               border-radius: 3px;
               background-color: $color_4;
               display: flex;
                     cursor: pointer;
                 align-items: center;
                justify-content: space-around;                  
                padding: 5px 0;


               div{

                  flex: 1 1 auto;

                  &:first-of-type{

                      text-align: center;

                    img{

                      width: 40px;

                    }

                 }

                 &:nth-of-type(2){

                    font-weight: 600;
                    text-transform: capitalize

                }


                  &:last-of-type{

                      text-align: center;

                 }


              }


              &.active{

                background: $color_1;
                  color: $color_5;
                  box-shadow: 0 0 10px $color_1;

              }

              }

          }

        }




        &__change{

          position: absolute;           
          padding: 10px;
          width: 30px;
          height: 60px;
          right: -3%;
          top: 37%;
          cursor: pointer;

          div{

            display: flex;
            justify-content: center;
            align-content: center;
            border-radius: 2px;
          width: 100%;
            height: 50%;
            box-shadow: 0 0 10px $color_4;
            margin: 10px 0;
            transition: all 0.3s;
            background: #ffd54f;

          svg{

            fill: $color_5;
            padding: 5px;
            transition: all .2s;

          }

        }
        }

      }


}

</style>
