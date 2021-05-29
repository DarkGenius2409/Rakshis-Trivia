<template>
  <div class="center intro">
    <h1 class="display-4">
      Welcome to... <br />
      <span class="brand">Rakshi's Trivia!</span>
    </h1>
    <br />
    <p class="display-1">The best trivia site and birthday present!</p>
    <p class="subtitle-1">Learn more about the best mom in the universe!</p>
    <v-btn elevation="2">
      <router-link class="link" to="/category">Play Now!</router-link>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "../components/HelloWorld.vue";

export default Vue.extend({
  name: "Home",

  components: {
    HelloWorld,
  },
});
</script>

<style lang="stylus">
.center
    text-align: center

.center
  margin: 0
  position: absolute
  top: 50%
  left: 50%
  -ms-transform: translate(-50%, -50%)
  transform: translate(-50%, -50%)

.link
  text-decoration: none
  text-color: black

.brand
  font-family: 'Satisfy', cursive
</style>
