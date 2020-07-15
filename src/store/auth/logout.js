import authServices from "../../services/auth";

export default {
  state: {
    token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
    isUserLoggedIn: () => {
      return localStorage.getItem("token") ? true : false;
    }
  },
  mutations: {
    logoutUpdate() {
      localStorage.removeItem("token");
    },
    removeTokenState(state) {
      state.token = ''
    }
  },
  actions: {
    LOGOUT({  commit }) {
      return new Promise((resolve , reject  ) => {
        authServices.logout().then(res => {
            commit("logoutUpdate" ,  res.data.token)
            commit("removeTokenState" ,  res.data.token)
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
