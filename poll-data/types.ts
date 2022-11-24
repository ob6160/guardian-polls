export type Answer = {
  text: string;
};

export type QuestionAndAnswers = {
  text: string;
  answers: Answer[];
};

export type Bucket = {
  id: string;
  text: string;
};

export type Poll = {
  id: string;
  title: string;
  endPageText: string;
  questions: QuestionAndAnswers[];
  buckets: Bucket[];
};

export type PollResults = {
  answerCount: number;
  questions: {
    [index: string]: number;
  }[];
};
