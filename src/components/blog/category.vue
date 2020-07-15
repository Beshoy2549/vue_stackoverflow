<template>
  <div>
    <div v-if="getcatposts[0].id">
      <div class="post-box" v-for="(item, i) in getcatposts" :key="i">
        <h3 class="post-title">{{ item.title }}</h3>
        <span class="post-date"> {{ item.created_at }} </span>
        <p class="post-content">{{ item.body }}</p>
        <div class="row">
          <div class="col-sm-6">
            <span class="post-author"> {{ item.user.name }} </span>
          </div>
          <div class="col-sm-6 text-right">
            <span class="post-cat ">
              {{ item.category.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getcatposts() {
      return this.$store.getters.getcatposts;
    },
  },
  mounted() {
    this.$store.dispatch("GETPOSTSIFGATEGOIES", this.$route.params.id);
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
.replys {
  h2 {
    text-align: left;
  }
  .replay-box {
    text-align: left;
    font-size: 25px;
    background: #f0f0f0;
    padding: 30px;
    margin-left: 30px;
    color: #000;
    margin-bottom: 20px;
    position: relative;
    .rate {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
  form {
    input[type="text"] {
      padding: 30px;
      margin-left: 30px;
    }
  }
}
</style>
