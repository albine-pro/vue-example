import Vue from "vue";
import upperFirst from 'lodash/upperFirst' 
import camelCase from 'lodash/camelCase' 
import App from "./App.vue";
import router from "./router";
import store from './store/store'
import { Helpers } from './classes/helpers.js'
import Trend from "vuetrend"

Vue.use(Trend)

Vue.config.productionTip = false;
Vue.prototype.helpers = new Helpers()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");



