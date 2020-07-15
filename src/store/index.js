import Vue from "vue";
import Vuex from "vuex";
import login from "./auth/login";
import signUp from "./auth/signUp";
import logout from "./auth/logout";
import createPost from "./posts/createPost";
import posts from "./posts/posts";
import singlePost from "./posts/singlePost";
import addComent from "./posts/addComent";
import getSingleCategoryPosts from "./posts/getSingleCategoryPosts";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    createPost,
    posts,
    singlePost,
    addComent,
    signUp,
    getSingleCategoryPosts,
    logout
  }
});