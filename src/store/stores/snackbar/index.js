import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import state from "./state";

export default {
  namespaced: true,
  actions: actions,
  mutations: mutations,
  getters: getters,
  state: state,
};
