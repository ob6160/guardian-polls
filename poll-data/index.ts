import { PollData } from "./types";

export const polls: PollData[] = [
  {
    id: "test-poll",
    title: "Our test poll",
    endPageText: "This is a test poll.",
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
    endPageText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
  {
    id: "metaverse",
    title: "Our P&E poll",
    endPageText:
      "Okay, like the 2020 US election, these results are clearly rigged.",
    questions: [
      {
        text: "Should the Guardian join the metaverse",
        answers: [
          { id: "yes", text: "Yes" },
          { id: "no", text: "No" },
        ],
      },
    ],
    buckets: [
  
    ]
  },
];
