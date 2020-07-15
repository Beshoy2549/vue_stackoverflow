import appServices from "../../services/app";

export default {
  state: {
    catposts : [{id:null}]
  },
  getters: {
    getcatposts(state) {
        return  state.catposts
    } 
  },
  mutations: {
    posts(state, data) {
      return state.catposts = data
  },
},
  actions: {
    GETPOSTSIFGATEGOIES({ commit } , id) {
      return new Promise((resolve, reject) => {
        appServices.getSingleCategoryPosts(id)
          .then((res) => {
            commit("posts" , res.data.data)
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
}

