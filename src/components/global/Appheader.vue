<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/blog">Aegency IT</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/blog">Blog</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="$store.state.login.token" @click="logout()"
            >Logout</b-nav-item
          >
          <b-nav-item to="/login" v-else>Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("LOGOUT").then(() => {
        this.$router.push({ name: "Login" });
      });
    }
  }
};
</script>
