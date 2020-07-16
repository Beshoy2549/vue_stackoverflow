import appServices from "../../services/app";

export default {
  state: {
    singlePost: {}
  },
  getters: {
    getSingle(state) {
      return state.singlePost;
    }
  },
  mutations: {
    getSingle(state, data) {
      return (state.singlePost = data);
    },
    addComment(state, data) {
      return state.singlePost.answers.unshift(data);
    },
    updateRate() {
      // state.singlePost.answers.forEach(answer => {
      //   if (answer.id == data.params.id) {
      //     answer.rate = data.data[1]
      //   }
      // })
    },
    slovedPost() {
      console.log("Done POST Solved");
    }
  },
  actions: {
    getSinglePost({ commit}, id) {
      return new Promise((resolve, reject) => {
        appServices
          .getSinglePost(id)
          .then(res => {
            commit("getSingle", res.data.data);
            resolve(res.data.data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    // CHECKUSERRATE({ commit }, id) {
    //   return new Promise((resolve, reject) => {
    //     appServices
    //       .checkuserrate(id)
    //       .then(() => {
    //         // console.log(res.data.data);
    //         commit("checkuserrate");
    //         resolve();
    //       })
    //       .catch(error => {
    //         reject(error);
    //       });
    //   });
    // },
    POSTSOLVED({ commit }, id) {
      return new Promise((resolve, reject) => {
        appServices
          .postSolve(id)
          .then(res => {
            console.log(res);
            commit("slovedPost");
            console.log(res);
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
