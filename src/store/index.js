import Vue from "vue";
import Vuex from "vuex";
import stores from "./stores";

console.log(stores);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ...stores,
  },
});
