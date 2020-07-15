import Api from "./axios";

export default {
  login(form) {
    return Api().post("auth/login", form);
  },
  signup(form) {
    return Api().post("auth/register" , form)
  },
  logout() {
    return Api().get("auth/logout")
  }
};
