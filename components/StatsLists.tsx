import { Stack } from "@guardian/source-react-components";
import { PollPage } from "../lib/pollstate";
import { AnswerAndCount, Poll } from "../poll-data/types";

interface Props {
  poll: Poll;
  results: AnswerAndCount[];
}

const StatsList = ({ results, poll }: Props) => {
  const total = results.reduce((sum, result) => sum + result.count, 0);

  return (
    <Stack>
      <p>RESULTS: {poll.title}</p>
      <ul>
        {results.map(({ text, id, count }) => {
          // assuming 1 question per poll

          return (
            <li key={id}>
              <b>{text}:</b>{" "}
              <span>
                {count} / {total}
              </span>
            </li>
          );
        })}
      </ul>
    </Stack>
  );
};

export default StatsList;
