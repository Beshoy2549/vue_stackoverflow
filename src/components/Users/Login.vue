<template>
  <div class="hello">
    <b-container>
      <b-row class="justify-content-md-center" >
        <b-col style="margin-top:10vh" class="col-md-6">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <h6 class="alert alert-danger mt-4" v-if="con">
              Invalid User Or Password
            </h6>
            <b-form-group
              id="input-group-1"
              label="Email: (mansourtony@gmail.com)"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="User Email"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Your Password: (password)"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                required
                placeholder="Enter Password"
              ></b-form-input>
            </b-form-group>

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
    name:"Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      show: true,
      con: false,
      token: ""
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
        this.$store.dispatch("LOGIN", this.form)
        .then(() => {   
          this.$router.push({ name: "Blog" });
        })
        .catch(() => {
          this.con = true;
        });
      
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      this.con = false;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
