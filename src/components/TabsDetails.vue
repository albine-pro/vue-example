<template>
    <div class="tabs_block">
        <button v-for="tab in tabs" v-bind:key="tab.name" v-bind:class="['tab-button', { active: currentTab.name === tab.name }]" v-on:click="getCurrentTab(tab)">{{ tab.name }}</button>

        <transition name="component-fade" mode="out-in">
            <trend :data="milesActive[currentRange]" :gradient="['#ffd54f', 'red', '#5e35b1']" :radius="10" auto-draw smooth>
            </trend>
        </transition>

        <transition name="component-fade" mode="out-in">
            <component v-bind:is="currentTab.component"></component>
        </transition>
    </div>
</template>

<script>
import {tabs} from "@/components/TabsDetails.js"
import { mapState } from 'vuex'
export default {
    data() {
        return {
            sum: 0,
            tweenedSum: 0,
            tabs: tabs,
            currentTab: tabs[0],
            test: ''
        }
    },
    methods: {
        getCurrentTab(tab) {
            this.currentTab = tab
        }
    },
    computed: {
        currentRange() {
            return this.currentTab.name.toLowerCase()
        },
        ...mapState(['milesActive'])
    }
};
</script>
<style lang="scss">
	.tabs_block{
		svg{
          height: 45%;
		}
	 }			    
</style>
