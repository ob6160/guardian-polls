import {
  Container,
  InlineError,
  SvgSpinner,
} from "@guardian/source-react-components";
import { useEffect, useState } from "react";
import { PollPage, pollPageSchema } from "../lib/pollstate";
import { AnswerAndCount, PollData } from "../poll-data/types";
import StatsList from "./StatsLists";

interface Props {
  poll: PollData;
}

const fetcher = async (pollId: string): Promise<PollPage> => {
  console.log("REQUESTING DATA");
  const res = await fetch(`/api/poll/${pollId}`);
  const data = await res.json();
  if (res.status !== 200) {
    throw new Error(data.message);
  }

  const parsedData = pollPageSchema.safeParse(data);
  if (!parsedData.success) {
    throw new Error("NOT PARSED");
  }
  return data as PollPage;
};

const PollResults = ({ poll }: Props) => {
  const [haveRequested, setHaveRequested] = useState(false);
  const [data, setData] = useState<PollPage | undefined>(undefined);
  const [error, setError] = useState<PollPage | undefined>(undefined);

  const isLoading = !data && !error;

  useEffect(() => {
    if (haveRequested) {
      return;
    }
    setHaveRequested(true);
    fetcher(poll.id)
      .then((results) => {
        setData(results);
        setError(undefined);
      })
      .catch((error) => {
        setError(error);
      });
  }, [poll, data, error, isLoading, haveRequested]);

  // assuming 1 question per poll
  const result: AnswerAndCount[] = data
    ? poll.questions[0].answers.map((answer) => ({
        ...answer,
        count: data?.answerVotes[answer.id] || 0,
      }))
    : [];

  return (
    <Container sideBorders topBorder>
      {error && <InlineError>FAILED TO GET RESULTS!</InlineError>}
      {isLoading && <SvgSpinner size="medium" />}

      {data && <StatsList results={result} title={poll.questions[0].text} />}
    </Container>
  );
};

export default PollResults;
