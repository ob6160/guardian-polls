import { Container, Stack } from "@guardian/source-react-components";

import { Poll, PollResults } from "../poll-data/types";

interface Props {
  poll: Poll;
  results: PollResults;
}

const StatsList = ({ results, poll }: Props) => {
  const getQuestionText = (questionIndex: number) => {
    return (
      poll.questions[questionIndex]?.text || `QUESTION ${questionIndex + 1}`
    );
  };

  const getAnswerText = (questionIndex: number, optionIndex: number) => {
    
    // because the poll won't match the mocked sample data
    try {
      const question = poll.questions[questionIndex];
      const answer = question.answers[optionIndex];
      return answer?.text;
    } catch {
      return `ANSWER ${optionIndex}`;
    }
  };

  return (
    <Stack>
      <p>RESULTS</p>
      {results.questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <p>{getQuestionText(questionIndex)} </p>

          {/* TO DO - map safely over the Poll rather than the results when the real dta format is in place */}
          <ul>
            {Object.entries(question).map(([optionKey, count], optionIndex) => (
              <li key={optionIndex}>
                <span>
                  {getAnswerText(questionIndex, optionIndex)}: {count} /{" "}
                  {results.answerCount}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Stack>
  );
};

export default StatsList;
