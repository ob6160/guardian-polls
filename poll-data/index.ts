import { Poll } from "./types";

export const polls: Poll[] = [
  {
    id: "test-poll",
    title: "Our test poll",
    questions: [
      {
        text: "Who will win the world cup?",
        answers: [{ text: "France" }, { text: "IDK" }],
      },
    ],
    buckets: [
      {
        id: "a",
        text: "You answered - thanks.",
      },
    ],
  },
  {
    id: "politics-poll",
    title: "The Election 2024",
    questions: [
      {
        text: "Who will win the election?",
        answers: [
          { text: "Labour" },
          { text: "Conservative" },
          { text: "Lib Dem" },
        ],
      },
      {
        text: "Will things get better?",
        answers: [{ text: "Yes" }, { text: "No" }, { text: "Don't know" }],
      },
    ],
    buckets: [
      {
        id: "labour",
        text: "You think labour will win.",
      },
      {
        id: "tory",
        text: "You think the tories will remain in power. In est ante in nibh mauris. Egestas pretium aenean pharetra magna ac placerat vestibulum. Eget lorem dolor sed viverra ipsum nunc. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Posuere ac ut consequat semper viverra nam. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla.",
      },
      {
        id: "lib-dem",
        text: "You predict a lib dem victory.",
      },
    ],
  },
];

