<template>
  <div id="app" class="main">
    <Bg/>
    <Column1/>
    <Column2/>
    <Column3 :show_menu_details="show_menu_details" v-on:hideMenuDetails="showMenuDetails" />
    <router-view name="img_block" />
    <router-view name="details_btn" />
    <router-view name="column4" />
    <div class="menu" @click="hideShowMenu(true)" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
        <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"/>
      </svg>
    </div>   
    <div class="menu_details" @click="showMenuDetails" :class="{'animated rotateIn':menuDetails}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
        <path d="M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"/>
      </svg>
    </div>
  </div>
</template>

<script>
import Bg from "@/components/Bg.vue"
import Column1 from "@/components/Column1.vue"
import Column2 from "@/components/Column2.vue"
import Column3 from "@/components/Column3.vue"
import { mapState } from 'vuex'

export default  {
  components: {
      Bg,
      Column1,
      Column2,
      Column3
  },
  data(){
    return {
      show_menu_details: false,
    }
  },
  computed:{
    ...mapState(['models','menuDetails'])
  },
  created(){

    this.$store.state.detailsPage = this.$route.name === 'details' ? true : false

    const activeModelIndex = this.initializeActiveModel()

    this.addInitialData(activeModelIndex)

  },
  watch:{
    $route (to){
        this.$store.state.detailsPage = to.name === 'details' ? true : false
    }
  },
  methods: {
    initializeActiveModel(){

      const models = this.models
      const activeModel = this.$route.params.model

      let activeModelIndex = 0
      for( let i = 0; i < models.length; i++ ){
          if( activeModel === models[i].name ){
            activeModelIndex = i
            break
          }
      }

      
      this.$store.state.activeModel = models[activeModelIndex]
      this.$store.state.activeModel.index = activeModelIndex  

      return activeModelIndex
       
    },
    addInitialData(activeModelIndex){

            this.$store.state.miles = []

      for( let i = 0; i < this.models.length; i++ ){
        
        const day = this.helpers.randomDataSet(14,0,20)
        const week = this.helpers.randomDataSet(7,0,60)
        const month = this.helpers.randomDataSet(30,0,100)

        const a = { day, week, month }

        this.$store.state.miles.push(a)



      }
        
    this.$store.state.milesActive = this.$store.state.miles[activeModelIndex]
    },
    showMenu(){
      this.show_menu = !this.show_menu
    },
    showMenuDetails(){
      this.show_menu_details = !this.show_menu_details
    },
    hideShowMenu(status){
       this.$store.dispatch('hideShowMenuAction', status ) 
    }
  }
}
</script>


<style lang="scss">

@charset 'UTF-8';

@import 'assets/scss/vendor/normalize';
@import 'assets/scss/base';

.main{

  height: 100%;
  width: 100%;
  display: flex;

  .menu{

      position: absolute;
      top: 40px;
      left: 20px;
      z-index: 1000;
      display: none;
      cursor: pointer;

  }

  .menu_details{

      position: absolute;
      top: 40px;
      right: 20px;
      z-index: 1000;
      display: none;
      cursor: pointer;

  }

    .close{
        display: none;
        position: absolute;
        z-index: 10001;
        cursor: pointer;
        top: 40px;
        right: 20px;
    }

    .close_detalis{
        display: none;
        position: absolute;
        z-index: 10001;
        cursor: pointer;
        top: 40px;
        left: 20px;
    }

  @media screen and (max-width: 899px){

      .img_block{
        display: none;
      }

      .bg{
        display: none;
      }

      .menu{
        display: block;
      }

      .menu_details{
        display: block;
      }

      .close{
          display: block;
      }

      .close_detalis{
         display: block;
      }
        
      .details_page{
          position: fixed;
          bottom: 0;
          right: 0;
          width: 30%;
          height: 50px;
          box-shadow: none;
        
        a{
          display: flex;
          width: 100%;
          height: 100%;
          box-shadow: none;
        }

        &.anim{
          bottom: 5%;
          right: -10%;
        }
      }



      .column__1{
        
        position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          transition: all .3s;
          transform: translateX(-100%);
          z-index: 10000;

          &.__show_menu{
            transform: translateX(0)!important;
          }

        ul{
          display: flex;
          width: 100%;
          height: 100%;
          position: initial;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-content: center;
          
          li{
            width: 100%;
            
            a{
              display: flex;
              justify-content: center;
              padding: 0;

              svg{
                display: none;
              }
            }
          }
        }
      }




      .column__2{

        width: 100%;
        
        .title__1{
          justify-content: center;
          
          div{
            font-size: 24px;
            margin: 0;
          }
        }
        
        .tabs_block{
          margin: 0;
          justify-content: center;
          align-content: center;
          align-items: center;
          flex-direction: column;
          height: 350px;
          display: flex;

          div{
            width: 90%;


            .tab__time{
              width: 100%;

              .title{
                text-align: center;
              }
            }

          }


          .miles{
              
              left: 50%;
              transform: translateX(-50%);
              right: auto;
              font-size: 20px;
              text-align: center;

          }
          
          button{
            width: 100%;
            margin: 0;
          }
          
          .tab{
            width: 90%;
          }
        }
        
        .auto_list__block{
          margin: 0;
          width: 100%;
          position: initial;
          display: flex;
          justify-content: center;
          
          h4{
            display: none;
          }
          
          .auto_list__block_w_i{
            display: flex;
            justify-content: center;
            
            .auto_list__block_w_i__info{
              width: 100%;
            }
            
            
          }
          
          .auto_list__block__change{
                position: fixed;
              bottom: 0;
              top: auto;
              display: flex;
              left: 0;
              width: 70%;
              padding: 0;
              height: 50px;
              right: auto;
              justify-content: center;
              align-items: center;
              box-shadow: none;
              
              div{
                height: 100%;
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: none;
              }
          }
        }
      }




      .column__3{
        
          background: $color_3;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10000;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          transition: all .3s;
          transform: translateX(100%);

         &.__show_menu_details{
            transform: translateX(0)!important;
          }
        
        .smal_menu{
          
          position: initial;
          
          .localization{
            margin: 0 10px;
          }
          
        }
        
        .info_block{
          position: initial;
          transform: translate(0,0%);
          height: auto;
        }

        .close_detalis{
            path{
              fill: $color_5;
            }
          }

        &.__details_page {
          background: white;

          .close_detalis{
            path{
              fill: $color_2;
            }
          }
        }
      }


      .column__4{

        .content{

          width: 100%;

          .block{
            margin-top: 0px;

          }

        }

      }

  }

}
</style>
