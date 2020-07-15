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
      return state.singlePost.answers.push(data);
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
    getSinglePost({ commit }, id) {
      return new Promise((resolve, reject) => {
        appServices
          .getSinglePost(id)
          .then(res => {
            console.log(res);
            commit("getSingle", res.data.data);
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
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
