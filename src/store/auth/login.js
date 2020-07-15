import authServices from "../../services/auth";

export default {
  state: {
    token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
    isUserLoggedIn: () => {
      return localStorage.getItem("token") ? true : false;
    }
  },
  mutations: {
    SaveUSerData(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    removeTokenState(state) {
      state.token = "";
    },
  },
  actions: {
    LOGIN({ commit }, form) {
      return new Promise((resolve, reject) => {
        authServices
          .login(form)
          .then(res => {
            commit("SaveUSerData", res.data.token);
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
