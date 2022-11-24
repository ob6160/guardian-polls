export type Answer = {
  id: string;
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

export type PollData = {
  id: string;
  title: string;
  endPageText: string;
  questions: QuestionAndAnswers[];
  buckets: Bucket[];
};

export type AnswerAndCount = Answer & { count: number };
