import Vue from 'vue';
import App from './App.vue';
import vueRouter from 'vue-router';
import router from './assets/js/router.js';
Vue.use(vueRouter);
//把路由挂载到实例上
import './assets/js/jquery-1.11.1.js';
import '../node_modules/mint-ui/lib/style.css';
import './assets/css/cssreset.css';
import './assets/css/animate.css';

import Vuex from 'vuex';
Vue.use(Vuex);
import store from './assets/js/vuex.js'

import Mint from 'mint-ui';
Vue.use(Mint);
new Vue({
  el:'#app',
  render:h=>h(App),
  router:router,
  //store绑定实例对象
  store:store,
});
