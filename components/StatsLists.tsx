import { Stack } from "@guardian/source-react-components";
import { PollPage } from "../lib/pollstate";
import { Poll } from "../poll-data/types";

interface Props {
  poll: Poll;
  results: PollPage;
}

const StatsList = ({ results, poll }: Props) => {

  const total = Object.values(results.answerVotes).reduce((sum, value) => sum + value, 0);

  return (
    <Stack>
      <p>RESULTS: {poll.title}</p>
      <ul>
        {Object.entries(results.answerVotes).map(([key, value], index) => {
          return <li key={index}>
            <b>{key}:</b> <span>{value} / {total}</span>
            </li>;
        })}
      </ul>
    </Stack>
  );
};

export default StatsList;
