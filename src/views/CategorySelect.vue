<template>
  <div>
    <Categories />
    <v-btn elevation="2" absolute top right>
      <router-link class="link" to="/">Back↩️</router-link>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Categories from "../components/Categories.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Categories,
  },
});
</script>

<style lang="stylus" scoped></style>
