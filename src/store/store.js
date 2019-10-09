import Vue from "vue";
import Vuex from "vuex";
import {models} from '@/store/modules/models.js'
// import * as active_model from '@/store/modules/active-model.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	detailsPage: false,
    activeModel:{
      index: 0,
      name: models[0].name,
      consumption: models[0].consumption,     
      speed: models[0].speed,   
      clearance: models[0].clearance,
      top_speed: models[0].top_speed,
      torque: models[0].torque,
      acceleration: models[0].acceleration,
      av_speed: models[0].av_speed,
      speed_test: models[0].speed_test,
      max_torque: models[0].max_torque,      
    },
  	miles: [{ day: [0] }, { week: [0] }, { month: [0] } ],
  	milesActive: { day: [0], week: [0], month: [0] },
    models: models,
    menuDetails: false,
    showMenu: false
  },
  mutations: {
    ACTIVE_MODEL( state, modelId ){
           state.activeModel = state.models[modelId]
           state.activeModel.index = modelId
    },
    MENU_DETAILS(state){
      state.menuDetails = true
      setTimeout( () => { state.menuDetails = false },500 )
    },
    HIDE_SHOW_MENU(state, status){
       state.showMenu = status
    }
  },
  actions: {
    setActiveModel({state,commit}, modelId){
      // какое-то действие
      commit('ACTIVE_MODEL', modelId)
    },
    menuDetailsAnim({state,commit}){
      commit('MENU_DETAILS')
    },
    hideShowMenuAction({state,commit}, status){
      commit('HIDE_SHOW_MENU', status)
    }
  },
  getters: {
    
  }
});
