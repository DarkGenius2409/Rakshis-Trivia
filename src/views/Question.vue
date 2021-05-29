<template>
  <div class="content">
    <!-- <v-card class="mx-auto" max-width="50vw" min-height="30vh" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            {{ categories[this.$route.params.category].name }}
            {{
              categories[this.$route.params.category].questions[
                this.$route.params.id
              ].id + 1
            }}
          </div>
          <v-list-item-title class="text-wrap display-3 question mb-1">
            {{
              categories[this.$route.params.category].questions[
                this.$route.params.id
              ].question
            }}
          </v-list-item-title>
          <v-list-item-subtitle class="answer">
            <v-text-field
              v-model="answer"
              label="Answer"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions class="custom_cls">
        <v-btn
          v-on:click="() => checkAnswer(this.answer)"
          class="text-right"
          outlined
          rounded
          color="cyan"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card> -->
    <v-card
      class="mx-auto"
      min-height="25vh"
      min-width="30vw"
      max-width="75vw"
      elevation-3
      hover
    >
      <v-card-media src="somes" height="30%" contain> </v-card-media>
      <v-card-title primary-title class="headline">
        <div class="overline mb-4">
          {{ categories[this.$route.params.category].name }}
          {{
            categories[this.$route.params.category].questions[
              this.$route.params.id
            ].id + 1
          }}
        </div>
      </v-card-title>
      <v-card-text class="text-wrap display-3 question mb-1">
        {{
          categories[this.$route.params.category].questions[
            this.$route.params.id
          ].question
        }}
      </v-card-text>
      <v-card-subtitle class="answer">
        <v-text-field
          v-model="answer"
          label="Answer"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
      </v-card-subtitle>
      <v-card-actions class="custom_cls">
        <v-spacer></v-spacer>
        <v-btn
          v-on:click="() => checkAnswer(this.answer)"
          class="text-right btn"
          outlined
          rounded
          color="cyan"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import Vue from "vue";

export default Vue.extend({
  name: "Question",

  data: () => {
    return {
      answer: "",
    };
  },

  computed: {
    ...mapState(["categories"]),
  },

  methods: {
    checkAnswer(answer: string) {
      if (
        answer ==
        this.categories[this.$route.params.category].questions[
          this.$route.params.id
        ].answer
      ) {
        this.$router.push("/success");
      } else {
        this.$router.push({
          name: "Failure",
          params: {
            correctAnswer: this.categories[this.$route.params.category]
              .questions[this.$route.params.id].answer,
          },
        });
      }
    },
  },
});
</script>

<style lang="stylus" scoped>
.question
  text-align: center

.answer
  text-align: center
  width: 70%
  margin: auto
  margin-top: 1.5rem
  display: inline-block

.container
  margin: 0
  position: absolute
  top: 50%
  left: 50%
  -ms-transform: translate(-50%, -25%)
  transform: translate(-50%, -75%)

.btn
  margin-bottom: 2vh

.text-right
  float: right
  margin-right: 2rem
</style>
