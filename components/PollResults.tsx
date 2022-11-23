import {
  Container,
  InlineError,
  SvgSpinner,
} from "@guardian/source-react-components";
import { useEffect, useState } from "react";
import { Poll, PollResults } from "../poll-data/types";

interface Props {
  poll: Poll;
}

const fetchMockPollResults = async (pollId: string): Promise<PollResults> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return {
    answerCount: 10,
    questions: [
      { "option one": 4, "option two": 3, "option three": 3 },
      { "option one": 1, "option two": 9, "option three": 0 },
    ],
  };
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
      {isLoading && <SvgSpinner  size='medium'/>}

      {results && <pre>{JSON.stringify(results)}</pre>}
    </Container>
  );
};

export default PollResults;
