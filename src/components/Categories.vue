<template>
  <v-card class="card" tile>
    <v-list rounded>
      <div class="categories">
        <v-subheader class="mx-auto display-1">Categories</v-subheader>

        <br />
        <v-list-item-group color="primary">
          <v-list-item v-for="category in categories" :key="category.id">
            <v-list-item-content>
              <v-list-item-title
                v-on:click="() => getQuestion(category.id)"
                v-text="category.name"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </div>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Categories",

  computed: {
    ...mapState(["categories"]),
  },

  methods: {
    getQuestion(id: number) {
      let category: any;
      for (let i: number = 0; i < this.categories.length; i++) {
        if (this.categories[i].id == id) {
          category = this.categories[i];
        }
      }

      let questionID =
        category.questions[
          Math.floor(Math.random() * category.questions.length)
        ].id;

      console.log(category, questionID);
      this.$router.push({ path: `/question/${category.id}/${questionID}` });
    },
  },
});
</script>

<style lang="stylus" scoped>
.card
    margin-top: 10px
</style>
