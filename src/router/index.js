import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Singlepost from "../components/blog/Singlepost.vue";
import Createpost from "../components/blog/Createpost.vue";
import myposts from "../components/blog/myposts.vue";
import singleCategory from "../components/blog/category.vue";
import Login from "../components/Users/Login.vue";
import Signup from "../components/Users/Signup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/login",
    children: [
      {
        path: "/login",
        component: Login,
        name: "Login",
        meta: {
          requiresVisitor: true
        }
      },
      {
        path: "/signup",
        component: Signup,
        name: "Signup",
        meta: {
          requiresVisitor: true
        }
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/blog/:id",
    name: "Singlepost",
    component: Singlepost,
    props: true
  },
  {
    path: "/myposts",
    name: "myposts",
    component: myposts,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/singlecategory/:id",
    name: "singlecategory",
    component: singleCategory,
    props: true
  },
  {
    path: "/Createpost",
    name: "Createpost",
    component: Createpost,
    meta: {
      requiresAuth: true
    }
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
