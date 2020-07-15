import appServices from "../../services/app";

export default {
  state:{
    mypost:[{}]
  },
  getters:{
    mypost(state) {
      return state.mypost;
    } 
  },
  mutations: {
    yes() {
      console.log("Done");
    },
    yes1(state , data) {
      return state.mypost = data
    },
  },
  actions: {
    POSTS({ commit }) {
      return new Promise((resolve, reject) => {
        appServices
          .posts()
          .then(res => {
            commit("yes");
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    } ,
    MYPOSTS({ commit }) {
      return new Promise((resolve, reject) => {
        appServices
          .getMyPost()
          .then(res => {
            console.log(res.data.data)
            commit("yes1" , res.data.data);
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    } ,

  }
};
