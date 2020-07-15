<template>
  <div>
    <div class="container">
      <div class="post-box my-2" v-if="getSingle.id">
        <h3 class="post-title">{{ getSingle.title }}</h3>
        <span class="post-date"> {{ getSingle.created_at }} </span>
        <p class="post-content">{{ getSingle.body }}</p>
        <div class="row">
          <div class="col-sm-6">
            <span class="post-author"> {{ getSingle.user.name }} </span>
          </div>
          <div class="col-sm-6 text-right">
            <span class="post-cat ">
              {{ getSingle.category.name }}
            </span>
          </div>
        </div>
      </div>
      <div class="replys">
        <h2>Replys</h2>
        <div class="replay-box" v-for="(list, i) in getSingle.answers" :key="i">
          {{ list.body }}
          <div class="rate">
            <div v-if="$store.state.login.token">
            
              <span @click="checkUser(list.id)" v-if="con"> up </span>
              <span @click="dicrate(list.id) && checkUser(list.id)" v-if="!con"> down </span>
            </div>
            <div class="numberofrate">{{ list.rate }}</div>
          </div>
        </div>
        <div v-if="getSingle.solved == 0">
          <form @submit.prevent="addComment()" v-if="$store.state.login.token">
            <div class="form-group">
              <label for="exampleInputEmail1">Write your Replay</label>
              <input
                type="text"
                class="form-control col-md-6 m-auto"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="body"
              />
            </div>
            <button  type="submit" class="btn btn-primary mb-5">Comment</button>
          </form>
        </div>
        <h1 v-else>This is Post Has Been Solved</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  name: "Singlepost",

  data() {
    return {
      listOfComments: [],
      body: "",
      con: true,
      count: 0,
      rate: 1,
    };
  },
  methods: {
    addComment: function() {
      let form = {
        body: {
          body: this.body,
        },
        id: this.$route.params.id,
      };

      this.$store.dispatch("ADDCOMMENTS", form).then(() => {
        this.body = "";
        //this.$store.dispatch("getSinglePost", this.$route.params.id);
      });
    },

    addrate(id) {
      const params = {
        rate: {
          rate: this.rate,
        },
        id: id,
      };
      this.$store.dispatch("INCRESADDCOMMENTRATE", params).then(() => {
        //DICRESADDCOMMENTRATE
        this.$store.dispatch("getSinglePost", this.$route.params.id);
      });
      this.con = false;
    },
    dicrate(id) {
      const params = {
        rate: {
          rate: this.rate - 1,
        },
        id: id,
      };
      this.$store.dispatch("DICRESADDCOMMENTRATE", params).then(() => {
        //DICRESADDCOMMENTRATE
        this.$store.dispatch("getSinglePost", this.$route.params.id);
      });
      this.con = true;
    },
    checkUser(id) {
      this.$store.dispatch("CHECKUSERRATE" , id)
    }
  },
  computed: {
    getSingle() {
      return this.$store.getters.getSingle;
    },
    checkuserrate() {
      return this.$store.getters.checkuserrate;
    },
  },

  mounted() {
    this.$store.dispatch("getSinglePost", this.$route.params.id);
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
  h1 {
    color: red;
  }
}
</style>
