<template>
    <div class="content">
        <div class="block">
            <span class="min">0</span>
            <div class="line">
                <div class="scale"></div>
                <div class="pointer__block">
                    <div class="ball"></div>
                    <div class="ball_bg"></div>
                </div>
            </div>
            <span class="max">{{ av_speedDisplay }} mph</span>
        </div>
        <p>Speed Test {{ speedTimeDisplay }} s</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { TweenLite } from 'gsap'
export default {
    data() {
        return {
            speedTime: 0,
            tweenedSpeedTime: 0,
            av_speed: 0,
            tweenedav_speed: 0,
        }
    },
    computed: {
        speedTimeDisplay() {
            return this.tweenedSpeedTime.toFixed(0);
        },
        av_speedDisplay() {
            return this.tweenedav_speed.toFixed(0);
        },
        ...mapState(['activeModel'])
    },
    watch: {
        speedTime: function(newValue) {
            TweenLite.to(this.$data, 2, {
                tweenedSpeedTime: newValue
            });
        },
        av_speed: function(newValue) {
            TweenLite.to(this.$data, 2, {
                tweenedav_speed: newValue
            });
        }
    },
    created() {
        setTimeout(() => {

            this.speedTime = 10
            this.av_speed = this.activeModel.av_speed
            document.getElementsByClassName('pointer__block')[0].classList.add("anim")

        }, 2000)

    }
};
</script>

<style lang="scss">
  
@import '../assets/scss/base';

   .content{

       display: flex;
       justify-content: center;
       align-content: center;
       align-items: center;
       width: 60%;
       height: 100%;
       color: $color_5;
       position: relative;
       flex-direction: column;

       .block{

          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 100px;

            span{

              padding: 0 20px;

              &:last-of-type{
                width: 70px;
              }

            }

            .line{

              display: flex;
              width: 100%;
              justify-content: space-around;
              align-items: center;
              position: relative;

              .scale{

                  width: 100%;
                  background: white;
                  height: 1px;


                }


                  .pointer__block{

                    position: absolute;
                    width: 20px;
                    height: 20px;
                    top: 44%;
                    left: -1%;
                    transform: translateY(-50%);  
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    align-items: center; 
                    transition: left 2s;

                    &.anim{

                      left: 99%;

                    }


                      .ball{

                          width: 50%;
                          height: 50%;
                          z-index: 5;
                          background: $color_2;
                          border-radius: 50%;

                      }

                      .ball_bg{
                          position: absolute;
                          width: 100%;
                          height: 100%;
                          background-color: $color_5;
                          opacity: .3;  
                          border-radius: 50%;        
                       }



                  }


            }

       }
       
   }

</style>
