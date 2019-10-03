<template>
  <div id="app" class="main">
    <Bg/>
    <Column1/>
    <Column2/>
    <Column3/>
    <router-view name="img_block" />
    <router-view name="details_btn" />
    <router-view name="column4" />
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
  computed:{
    ...mapState(['models'])
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

}
</style>
