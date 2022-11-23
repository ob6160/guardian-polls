import { Poll } from "./types";

export const polls: Poll[] = [
  {
    id: "test-poll",
    questions: [
      {
        text: "Who will win the world cup?",
        answers: [{ text: "France" }, { text: "IDK" }],
      },
    ],
  },
  {
    id: "politics-poll",
    questions: [
      {
        text: "Who will win the election?",
        answers: [{ text: "Labour" }, { text: "Conservative" }, {text:"Lib Dem"}],
      },
      {
        text: "Will things get better?",
        answers: [{ text: "Yes" }, { text: "No" }, {text:"Don't know"}],
      },
    ],
  },
];
