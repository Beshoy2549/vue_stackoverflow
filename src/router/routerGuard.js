import router from "./index";
import store from "@/store/index";

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.login.isUserLoggedIn()) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.state.login.isUserLoggedIn()) {
      next({ name: "Blog" });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});
