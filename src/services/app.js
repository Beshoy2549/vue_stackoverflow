import Api from "./axios";

export default {
  posts() {
    return Api().get("posts");
  },
  addPost(form) {
    return Api().post("posts", form);
  },
  getCategories() {
    return Api().get("categories");
  },
  getSingleCategoryPosts(id) {
    return Api().get(`categories-posts/${id}`);
  },
  getSinglePost(id) {
    return Api().get(`post/${id}`);
  },
  getMyPost() {
    return Api().get("posts-user");
  },
  postSolve(id) {
    return Api().patch(`post/${id}/solve`);
  },
  addComment(form) {
    return Api().post(`answers/store/${form.id}`, form.body);
  },
  incresaddRateOfComment(params) {
    return Api().patch(`answer/${params.id}/rate` , params.rate);
  },
  dicresaddRateOfComment(params) {
    return Api().patch(`answer/${params.id}/rate` , params.rate);
  },
  checkuserrate(id) {
    return Api().get(`answer/${id}/check`);
  }
};
