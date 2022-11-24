import { Poll } from "./types";

export const polls: Poll[] = [
  {
    id: "test-poll",
    title: "Our test poll",
    questions: [
      {
        text: "Who will win the world cup?",
        answers: [
          { id: "fr", text: "France" },
          { id: "idk", text: "IDK" },
        ],
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
          { id: "labour", text: "Labour to win" },
          { id: "tory", text: "Conservatives to win" },
          { id: "libdem", text: "Liberal Democrats will win" },
        ],
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
