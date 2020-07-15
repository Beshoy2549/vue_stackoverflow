import appServices from "../../services/app";

export default {
  state: {
    checkuserrate : ''
  },
  getters: {
    checkuserrate(state) {
      state.checkuserrate
    }
  },
  mutations: {
    yes(state, data) {
      return data;
    },
    yes2(state, data) {
      return data;
    },
    checkuserrate(state ,data) {
    return state.checkuserrate = data
    }
  },
  actions: {
    ADDCOMMENTS({ commit }, form) {
      return new Promise((resolve, reject) => {
        appServices
          .addComment(form)
          .then(res => {
            commit("addComment", res.data.data);
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    ADDCOMMENTRATE({ commit }, params) {
      return new Promise((resolve, reject) => {
        appServices
          .incresaddRateOfComment(params)
          .then(res => {
            commit("updateRate", { data: res.data.data, params: params });
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    INCRESADDCOMMENTRATE({ commit }, params) {
      return new Promise((resolve, reject) => {
        appServices
          .incresaddRateOfComment(params)
          .then(res => {
            commit("updateRate", params ); //{ data: res.data.data, params: params }
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    DICRESADDCOMMENTRATE({ commit }, params) {
      return new Promise((resolve, reject) => {
        appServices
          .dicresaddRateOfComment(params)
          .then(res => {
            commit("updateRate",params);
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    CHECKUSERRATE({ commit }, id) {
      return new Promise((resolve, reject) => {
        appServices
          .checkuserrate(id)
          .then(res => {
            console.log(res.data.data);
            commit("checkuserrate" , res.data.data);
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    
  }
};
