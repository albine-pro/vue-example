<template>
  <div class="column__4"  v-bind:class="{ anim: detailsPage }">  
     <SpeedTest/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SpeedTest from "@/components/SpeedTest.vue"
export default {
  components: {
      SpeedTest
  },
  computed: { ...mapState( [ 'detailsPage' ] ) }
};
</script>

<style lang="scss">

@import '../assets/scss/base';

  .column__4{

         background: $color_3;
         width: 100%;
         height: 30%;
         position: absolute;
         left: 0;
         bottom: 0;
         transition: all .5s;
         transform: translateY(100%);
         z-index: 2;
         display: flex;
         justify-content: center;
         align-content: center;
         align-items: center;

       &.anim{
          transform: translateY(0);
        }


     }

</style>
