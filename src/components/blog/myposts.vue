<template>
  <div>
    <div class="container">
      <div v-if="mypost[0].id">
        <div class="post-box my-4 animated fadeInUp" v-wow data-wow-delay="0.1s" data-wow-duration="1.5s" v-for="(item, i) in mypost" :key="i" >
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
          <div class="solved" v-if="item.solved == 0"  @click="item.solved == 1 ">
            <button @click="solvepost(item.id)" class="btn btn-primary">
              Solved
            </button>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      con: true,
    };
  },
  methods: {
    solvepost(id) {
      this.$store.dispatch("POSTSOLVED", id);
       this.$router.push({ name: "Singlepost", params:{id:id} }); 
    },
    hidediv: function() {
      if (this.con) {
        this.con = false;
      }
    }
  },
  computed: {
    mypost() {
      return this.$store.getters.mypost;
    },
  },
  created() {
    this.$store.dispatch("MYPOSTS");
    // this.$store.dispatch("POSTSOLVED" ,  this.$route.params.id);
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
  .solved {
    position: absolute;
    top: 15px;
    right: 20px;
  }
}
</style>
