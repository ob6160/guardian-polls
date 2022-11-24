import { AnswerAndCount, PollData } from "../poll-data/types";
import { PollPage } from "./pollstate";

export const combinePollAndAnswers = (
  data: PollPage,
  poll: PollData
): AnswerAndCount[] => {
  // assuming 1 question per poll
  const result: AnswerAndCount[] = data
    ? poll.questions[0].answers.map((answer) => ({
        ...answer,
        count: data?.answerVotes[answer.id] || 0,
      }))
    : [];

  return result;
};
