<template>
  <div class="home">
  <Mianform />
   <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Mianform from "../components/Users/maniForm.vue";

export default {
  name: "Home",
  components: {
    
    Mianform
  }
};
</script>
