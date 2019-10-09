<template>
    <div class="info_block">
        <div class="info_block__sub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
                <path d="M136.5 77.7l37 67L32 285.7 216.4 464l152.4-148.6 54.4-11.4L166.4 48l-29.9 29.7zm184 208H114.9l102.8-102.3 102.8 102.3zM423.3 304s-56.7 61.5-56.7 92.1c0 30.7 25.4 55.5 56.7 55.5 31.3 0 56.7-24.9 56.7-55.5S423.3 304 423.3 304z"></path>
            </svg>
            <div class="info_block__sub__section">
                <div>{{ activeModel.consumption }}</div>
                <div>Consumption</div>
            </div>
        </div>
        <div class="info_block__sub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
                <path d="M128 416h256v48H128zM256 288c17.7 0 32-14.3 32-32s-14.3-32-32-32c-3 0-6 .4-8.8 1.2l-66.7-48.7-4 3.5 48.9 66.7c-.9 2.9-1.4 6-1.4 9.3 0 17.7 14.3 32 32 32z"></path>
                <path d="M256 48C141.1 48 48 141.1 48 256c0 48.3 16.5 92.7 44.1 128h58.8l4-4 22.1-22.1-22.9-22.9-22.1 22c-19.9-24.3-32.1-54-35.2-85H128v-32H96.8c3.1-31 15.3-60.7 35.2-85l22.1 22 22.9-22.9-22-22.1c24.3-19.9 54-32.1 85-35.2V128h32V96.8c31 3.1 60.7 15.3 85 35.2l-22 22.1 22.9 22.9 22.1-22c19.9 24.3 32.1 54 35.2 85H384v32h31.2c-3.1 31-15.3 60.7-35.2 85l-22.1-22-22.9 22.9 22.1 22.1 4 4h58.8c27.6-35.3 44.1-79.7 44.1-128 0-114.9-93.1-208-208-208z"></path>
            </svg>
            <div class="info_block__sub__section">
                <div>{{ activeModel.speed }}</div>
                <div>Speed</div>
            </div>
        </div>
        <div class="info_block__sub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                <path d="M32 34.02V20h-4v14.02h-6L30 42l8-7.98h-6zM18 6l-8 7.98h6V28h4V13.98h6L18 6z"></path>
            </svg>
            <div class="info_block__sub__section">
                <div>{{ activeModel.clearance }}</div>
                <div>Clearance</div>
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
       position: absolute;
       transform: translate(20%,-50%);
       top: 5%;
       left: 50%;

       &__sub{

        width: 90px;
        height: 100px;
        border-radius: 3px;
        box-shadow: 0 0 5px $color_4;
        margin: 20px 0;
                  color: $color_4;
                  // background: rgba(250,250,250,.1);
                  position: relative;

                  svg{
          
                    position: absolute;
                    top: 7px;
                    left: 7px;
                    fill: $color_4;

                }

                &__section{

                  position: absolute;
                  bottom: 5px;
                  left: 10px;



                  div{

                    &:first-of-type{

                      font-size: 16px;
                      font-weight: 600;
                      font-family: $poiret;

                    }

                    &:last-of-type{
                              
                              font-size: 10px;
                              margin: 5px 0;

                    }


                  }

                 }


            }


        }

</style>
