import { apiNotAuth } from "../../../plugins/axios";
import ls from "../../../plugins/secureLs";

export default {
  setUser({ commit }, data) {
    commit("setUser", data);
  },

  // Autenticação
  login({ commit }, data) {
    return new Promise(function (resolve, reject) {
      apiNotAuth
        .post("auth/login", data)
        .then((response) => {
          commit("setUser", response.data.data.user);
          ls.set("config", response.data.data);

          resolve(response.data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  },
  // register({ commit }, data) {},
};
