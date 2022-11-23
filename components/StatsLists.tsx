import { Stack } from "@guardian/source-react-components";
import { PollPage } from "../lib/pollstate";
import { Poll } from "../poll-data/types";

interface Props {
  poll: Poll;
  results: PollPage;
}

const StatsList = ({ results, poll }: Props) => {
  return (
    <Stack>
      <p>RESULTS</p>

      <pre>{JSON.stringify(results, undefined, 1)}</pre>
    </Stack>
  );
};

export default StatsList;
