import {
  Container,
  InlineError,
  SvgSpinner,
} from "@guardian/source-react-components";
import { useEffect, useState } from "react";
import { PollPage } from "../lib/pollstate";
import { Poll } from "../poll-data/types";
import StatsList from "./StatsLists";

interface Props {
  poll: Poll;
}

const fetcher = async (url: string): Promise<PollPage> => {
  const res = await fetch(url);
  const data = await res.json();
  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data as PollPage;
};

const PollResults = ({ poll }: Props) => {
  const [data, setData] = useState<PollPage | undefined>(undefined);
  const [error, setError] = useState<PollPage | undefined>(undefined);

  useEffect(() => {
    fetcher(`/api/poll/${poll.id}`)
      .then((results) => {
        setData(results);
        setError(undefined);
      })
      .catch((error) => {
        setError(error);
      });
  });

  const isLoading = !data && !error;

  return (
    <Container sideBorders topBorder>
      {error && <InlineError>FAILED TO GET RESULTS!</InlineError>}
      {isLoading && <SvgSpinner size="medium" />}

      {data && <StatsList results={data} poll={poll} />}
    </Container>
  );
};

export default PollResults;
