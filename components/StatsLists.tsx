import { Stack } from "@guardian/source-react-components";
import { PollPage } from "../lib/pollstate";
import { AnswerAndCount, PollData } from "../poll-data/types";

interface Props {
  title: string;
  results: AnswerAndCount[];
}

const StatsList = ({ results, title }: Props) => {
  const total = results.reduce((sum, result) => sum + result.count, 0);

  return (
    <Stack>
      <p>RESULTS: {title}</p>
      <ul>
        {results.map(({ text, id, count }) => {
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
