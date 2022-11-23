import {
  Container,
  InlineError,
  SvgSpinner,
} from "@guardian/source-react-components";
import { useEffect, useState } from "react";
import { sampleResults } from "../poll-data";
import { Poll, PollResults } from "../poll-data/types";
import StatsList from "./StatsLists";

interface Props {
  poll: Poll;
}

const fetchMockPollResults = async (pollId: string): Promise<PollResults> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return sampleResults;
};

const PollResults = ({ poll }: Props) => {
  const [results, setResult] = useState<PollResults | undefined>(undefined);
  const [loadFailed, setLoadFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const requestResults = () => {
    setIsLoading(true);
    fetchMockPollResults(poll.id)
      .then((data) => {
        setResult(data);
        setLoadFailed(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadFailed(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(requestResults, [poll.id]);

  return (
    <Container sideBorders topBorder>
      {loadFailed && <InlineError>FAILED TO GET RESULTS!</InlineError>}
      {isLoading && <SvgSpinner size="medium" />}
      {results && <StatsList results={results} poll={poll} />}
    </Container>
  );
};

export default PollResults;
