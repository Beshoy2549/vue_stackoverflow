<template>
  <div>
    <div class="post-box bounceInLeft" @click="showSinglePost(id)" v-wow data-wow-delay="0.2s" data-wow-duration="1.5s">
      <h3 class="post-title">{{ title }}</h3>
      <span class="post-date">{{ date }} </span>
      <p class="post-content">{{ body }}</p>
      <div class="row">
        <div class="col-sm-6">
          <span class="post-author">
              {{user_name}}
             </span>
        </div>
        <div class="col-sm-6 text-right">
          <span class="post-cat ">
            {{ category }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "date", "body", "user_id", "category", "id", "user_name"],
  name: "Blogposts",
  methods: {
    showSinglePost(id) {
      this.$router.push({
        name: "Singlepost",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.post-box {
  padding: 20px;
  background-color: #fdfafa;
  box-shadow: 0px 0px 10px #ddd;
  position: relative;
  text-align: left;
  margin-bottom: 25px;
  .post-title {
    text-align: center;
    color: #d2691e;
  }
  .post-date {
    display: block;
    padding: 0 0 5px;
    color: #888;
    font-size: 14px;
  }
  .post-content {
    line-height: 1.8;
    color: #666;
  }
  .post-author {
    background-color: #2196f3;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
  }
  .post-cat {
    background-color: #1e46e9;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
  }
}
</style>
