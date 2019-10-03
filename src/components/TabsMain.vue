<template>
	<div class="tabs_block">		
		  <button			
		    v-for="tab in tabs"			
		    v-bind:key="tab.name"			
		    v-bind:class="['tab-button', { active: currentTab.name === tab.name }]"			
		    v-on:click="currentTab = tab"			
		  >{{ tab.name }}</button>			
		  			
		  <transition name="component-fade" mode="out-in">			
			  <component		
			    v-bind:is="currentTab.component"		
			    class="tab"	
			    :miles_active="milesActive"	
			  ></component>		
		  </transition>	

		  	<div class="miles">
				<span>{{ totalMilesDisplay }}</span>&nbsp;
				<span>Miles</span>
			</div>					
	</div>		
</template>

<script>

import {tabs} from "@/components/TabsMain.js"
import { mapState } from 'vuex'
import { TweenLite } from 'gsap'

export default {
  data(){
  	return  {
  	    sum: 0,
  	    tweenedSum: 0,						
	  	tabs: tabs,						
	    currentTab: tabs[0],
	    }
	  },
  methods:{
	 totalMilesCount(){
	   const currentRange = this.currentTab.name.toLowerCase()
	   const currentData = this.milesActive
	   for( let i in currentData ){
	   	if( currentRange === i ){
            this.sum = currentData[i].reduce((accumulator, currentValue) => accumulator + currentValue)
	   	}
	   }	
	},
  },
  computed:{
	totalMilesDisplay(){
	   this.totalMilesCount()		   
	   return this.tweenedSum.toFixed(0);	
	},
	...mapState(['milesActive'])
  },
  watch: {	
	sum(newValue) {	  
	   TweenLite.to(this.$data, 0.5, { tweenedSum: newValue });	
	}
  }
};
</script>
