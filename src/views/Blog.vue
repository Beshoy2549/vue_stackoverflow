<template>
  <div class="blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDesc }}</p>
    <router-link
      to="/Createpost"
      v-if="$store.state.login.token"
      class="btn btn-primary mb-4 fadeIn"
      v-wow data-wow-delay=".5s" data-wow-duration="1.5s"
      >Create Post</router-link
    >
    <router-link to="/login" class="text-primary mb-4" v-else
      >You have to login</router-link
    >

    <router-link
      to="/myposts"
      v-if="$store.state.login.token"
      class="btn btn-success mb-4 mx-2 fadeIn"
      v-wow data-wow-delay="1s" data-wow-duration="1.5s"
      >My Posts
    </router-link>
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="col-md-8">
          <div class="posts">
            <Blogposts
              v-for="post in posts"
              :key="post.id"
              :title="post.title"
              :date="post.created_at"
              :body="post.body"
              :user_id="post.user.id"
              :category="post.category.name"
              :user_name="post.user.name"
              :id="post.id"
            />
          </div>
        </b-col>
        <div class="col-md-4">
          <div class="sidebar">
            <BlogSidebar />
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Blogposts from "@/components/blog/Blogposts.vue";
import BlogSidebar from "@/components/blog/BlogSidebar.vue";

export default {
  mounted() {
    this.getPosts();
  },
  data: function() {
    return {
      pageName: "Blog Us",
      pageDesc: "This is Blog Us",
      posts: []
    };
  },
  methods: {
    getPosts() {
      this.$store
        .dispatch("POSTS")
        .then(response => {
          this.posts = response.data.data;
        })
        .catch(() => {});
    },
    showSinglePost(id) {
      this.$route.push({
        name: "Singlepost",
        params: {
          id: id
        }
      });
    }
  },
  name: "blog",
  components: {
    Blogposts,
    BlogSidebar
  }
};
</script>
