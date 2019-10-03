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
  },
  mutations: {
    ACTIVE_MODEL( state, modelId ){
      // console.log('state: ', state,'  value: ', value)
           state.activeModel = state.models[modelId]
           state.activeModel.index = modelId
    }
  },
  actions: {
    setActiveModel({state,commit}, modelId){
      // какое-то действие
      commit('ACTIVE_MODEL', modelId)
    }
  },
  getters: {
    
  }
});
