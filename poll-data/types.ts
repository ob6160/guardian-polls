export type Answer = {
    text: string;
  };
  
  export type QuestionAndAnswers = {
    text: string;
    answers: Answer[];
  };
  
  export type Poll = {
    id: string;
    questions: QuestionAndAnswers[];
  };
  