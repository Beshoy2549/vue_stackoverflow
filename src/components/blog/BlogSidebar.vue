<template>
  <div>
    <div
      class="cat bounceInRight"
      v-for="(item, i) in getcatogries"
      :key="i"
      v-wow data-wow-delay="1s" data-wow-duration="1.5s"
    >
    <router-link :to="{name:'singlecategory' , params:{id:item.id} }">{{ item.name }}</router-link>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogSidebar",
 
  computed: {
    getcatogries() {
      return this.$store.getters.getGatgories;
    },
  },
  created() {
    this.$store.dispatch("GETCATEGORIES");
  },
};
</script>

<style lang="scss" scoped>
.cat {
  background-color: #282d41;
  border: 1px solid #000;
  padding: 10px;
  color: #fff;
  margin-bottom: 5px;
}
</style>
