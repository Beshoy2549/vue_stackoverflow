import appServices from "../../services/app";

export default {
  state: {
    catgories: {
       
    },
  },
  getters: {
    getGatgories(state) {
      return state.catgories;
    },
  },
  mutations: {
    yes(state, data) {
     return(data);
    },
    getCategoriesData(state, data) {
      state.catgories = data;
    },
  },
  actions: {
    ADDPOST({ commit }, form) {
      return new Promise((resolve, reject) => {
        appServices
          .addPost(form)
          .then((res) => {
            commit("yes", res);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    GETCATEGORIES({ commit }) {
      return new Promise((resolve, reject) => {
        appServices
          .getCategories()
          .then((res) => {
            commit("getCategoriesData", res.data.data);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
