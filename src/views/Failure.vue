<template>
  <div class="content">
    <h1 class="display-4">Sorry, you got it wrong.</h1>
    <p class="subtitle-1">
      The correct answer was {{ this.$route.params.correctAnswer }}
    </p>
    <v-btn
      v-on:click="() => checkAnswer(this.answer)"
      class="text-right"
      outlined
      rounded
      color="cyan"
    >
      <router-link class="link" to="/category">Next</router-link>
    </v-btn>
  </div>
</template>

<style lang="stylus" scoped>
.container
  margin: 0
  position: absolute
  top: 50%
  left: 50%
  -ms-transform: translate(-50%, -5%)
  transform: translate(-50%, -95%)
  text-align: center

p
    margin-top: 1rem
</style>
