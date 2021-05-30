<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1 class="display-2"><span class="brand">Rakshi's Trivia</span></h1>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>

<style lang="stylus">
.display-2
  font-weight: 200

@media only screen and (min-width: 400px) and (max-width: 768px)
  .display-4
    font-size: 2rem
  .display-2
    font-size: 0.5rem
  .display-1
    font-size: 0.0625rem
  .subtitle-1
    font-size: 0.125rem

@media only screen and (max-width: 400px)
  .display-4
    font-size: 1rem
  .display-2
    font-size: 0.25rem
  .display-1
    font-size: 0.03125rem
  .subtitle-1
    font-size: 0.0625rem
</style>
