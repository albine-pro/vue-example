<template>
    <div class="info_block">
        <div class="info_block__sub">
            <div class="top_speed">
                <div></div>
                <div>TOP SPEED</div>
                <span>{{ activeModel.top_speed }}</span>
            </div>
        </div>
        <div class="info_block__sub">
            <div class="torque_scale">
                <div class="lines" v-for="line in activeModel.torque">
                    <div class="bg"></div>
                    <div class="line" :style="{ height: line + '%' }"></div>
                </div>
                <span>TORQUE</span>
            </div>
        </div>
        <div class="info_block__sub">
            <div class="acceleration">
                <trend :data="activeModel.acceleration" :gradient="['#ffd54f']" :radius="5" auto-draw smooth>
                </trend>
                <span>ACCELERATION</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState( [ 'activeModel' ] )
};
</script>

<style lang="scss">

@import '../assets/scss/base';

   .info_block{
       
        display: flex;
        flex-direction: column;
        transform: translateY(7%);
        justify-content: flex-start;
        height: 100%;
        margin-top: 20px;

         &__sub{

            width: 80px;
            height: 100px;
            border-radius: 10px;
            box-shadow: 0 -4px 10px $color_4;
            margin: 10px auto;
            

            .top_speed{

                position: relative;
                width: 100%;
                height: 100%;

                div{

                  &:first-of-type{
                        border-radius: 50%;
                        width: 70%;
                        height: 60%;
                        border: 5px solid $color_2;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        position: absolute;            
                    }

                  &:last-of-type{
                      border-radius: 50%;
                      width: 90%;
                      height: 40%;
                      top: 65%;
                      left: 50%;
                      transform: translateX(-50%);
                      position: absolute;
                      background: $color_5;
                      z-index: 2;
                      font-size: 8px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      font-weight: 600;
                    }

                  }

                  span{
                     position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 16px;
                    font-weight: 600;               
                  }
                           
            }



            .torque_scale{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;

                .lines{
                  position: relative;
                  width: 5px;
                  height: 60%;
                  margin: 0 2px;
                  border-radius: 10px;

                  .bg{

                    position: absolute;
                    z-index: 0;
                    width: 100%;
                    height: 100%;
                    background-color: $color_4;
                    top: 0;
                    left: 0;

                  }

                  .line{

                    position: absolute;
                    z-index: 1;
                    width: 100%;
                    background-color: $color_2;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                  }


                }

                span{
                  position: absolute;
                  bottom: 5px;
                  left: 50%;
                  transform: translateX(-50%);
                  font-size: 8px;
                  font-weight: 600;
                }


            }


            .acceleration{

                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                stroke-width: 10px;
                position: relative;

                span{
                  position: absolute;
                  bottom: 5px;
                  left: 50%;
                  transform: translateX(-50%);
                  font-size: 8px;
                  font-weight: 600;
                }

            }


         }


      }

</style>
