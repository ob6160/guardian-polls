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

export type Poll = {
  id: string;
  title: string;
  questions: QuestionAndAnswers[];
  buckets: Bucket[];
};

export type AnswerAndCount = Answer & { count: number };
