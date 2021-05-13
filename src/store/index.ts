import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [
      {
        id: 0,
        name: "Early Life",
        questions: [
          {
            id: 0,
            question: "When was Rakshi born?",
            answer: "May 31, 1985",
          },
          {
            id: 1,
            question: "When was Rakshi's sister born?",
            answer: "May 31, 1985",
          },
          {
            id: 2,
            question: "How old was Rakshi's mom when \nRakshi was born?",
            answer: "23",
          },
          {
            id: 3,
            question: "What did Rakshi call her dad?",
            answer: "Hitler",
          },
          {
            id: 4,
            question: "Why did Rakshi call her dad\n Hitler?",
            answer: "Because he was strict.",
          },
        ],
      },
      {
        id: 1,
        name: "Education",
        questions: [
          {
            id: 0,
            question: "Where did Rakshi go to school?",
            answer: "C.S.I. Bain",
          },
          {
            id: 1,
            question: "Where did Rakshi go to college?",
            answer: "Ethiraj College for Women",
          },
          {
            id: 2,
            question: "What did Rakshi study in college?",
            answer: "Economics",
          },
          {
            id: 3,
            question: "What degree did Rakshi get?",
            answer: "BBA",
          },
          {
            id: 4,
            question: "What year did Rakshi \ngraduate from college?",
            answer: "2005",
          },
        ],
      },
      {
        id: 2,
        name: "Marriage/Childbirth",
        questions: [
          {
            id: 0,
            question: "When did Rakshi get married?",
            answer: "April 30, 2007",
          },
          {
            id: 1,
            question: "Who did Rakshi marry?",
            answer: "Sathyanarayan Veeradharan",
          },
          {
            id: 2,
            question: "Where was Rakshi's honeymoon?",
            answer: "India",
          },
          {
            id: 3,
            question: "When was Rakshi's son born?",
            answer: "September 24, 2009",
          },
          {
            id: 4,
            question: "What is the name of \nRakshi's son?",
            answer: "Aarav Veer Narayan",
          },
        ],
      },
      {
        id: 3,
        name: "Post-Childbirth",
        questions: [
          {
            id: 0,
            question: "Where did Rakshi have her \nown friend group?",
            answer: "North Carolina",
          },
          {
            id: 1,
            question:
              "Who came with Rakshi to the U.S.A. \nafter her son was born?",
            answer: "Rakshi's Mom",
          },
          {
            id: 2,
            question: "When did Rakshi reach \nher 30's?",
            answer: "May 31, 2015",
          },
          {
            id: 3,
            question: "What does Rakshi's son \ncall her?",
            answer: "Mummy",
          },
          {
            id: 4,
            question: "Who does Rakshi love \nthe most?",
            answer: "Her son.",
          },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
