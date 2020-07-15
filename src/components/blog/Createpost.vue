<template>
  <div class="hello">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col style="margin-top:10vh" class="col-md-7">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <!-- <h6 class="alert alert-danger mt-4" v-if="con">
              Invalid User Or Password
            </h6> -->
            <b-form-group
              id="input-group-1"
              label=" Title Of Post"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.title"
                type="text"
                required
                placeholder="Title Of Post"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Write your Post"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.body"
                type="text"
                required
                class="comment"
              ></b-form-input>
            </b-form-group>

            
            <div>
              <select class="custom-select my-4"  v-model="form.category_id">
                <option   v-for="(item , i) in getcatogries" :key="i" :value="item.id">{{item.name}}</option>
              </select>
            </div>

            <b-button type="submit" class="mr-4" variant="primary"
              >Submit</b-button
            >
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        title: "",
        body: "",
        category_id  : ""
      },
     
      show: true,
      con: false,
    };
  },
  computed: {
    getcatogries(){
      return this.$store.getters.getGatgories
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$store
        .dispatch("ADDPOST", this.form)
        .then(() => { this.$router.push({ name: "Blog" });})
        .catch(() => {
          this.con = true;
        });
    },

    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.title = "";
      this.body = "";
      this.con = false;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  created() {
    this.$store.dispatch("GETCATEGORIES")
  },
};
</script>

<style lang="scss" scoped>
.comment {
  height: 100px;
}
</style>