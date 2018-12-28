import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);//创建数据库
export default new Vuex.Store({
  //数据
  state:{
    tabIndex:0,
    username:''
  },
  mutations:{}
})
