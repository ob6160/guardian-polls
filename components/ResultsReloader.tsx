import { InlineError } from "@guardian/source-react-components";
import useSWR from "swr";
import { combinePollAndAnswers } from "../lib/answerParsing";
import { PollPage } from "../lib/pollstate";
import { PollData } from "../poll-data/types";
import StatsList from "./StatsLists";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function ResultReloader(props: {
  pollData: PollData;
  answerId: string;
  initialResults: PollPage;
}) {
  const { pollData, answerId, initialResults } = props;
  const readUrl = `api/poll/${pollData.id}`;

  const { data, error } = useSWR(readUrl, fetcher);
  const dataToUse = data || initialResults;
  const answers = dataToUse ? combinePollAndAnswers(dataToUse, pollData) : [];

  return (
    <>
      {!!error && (
        <div>
          <InlineError>failed to load</InlineError>
        </div>
      )}

      {!data && <div>loading...</div>}

      {!!data && <StatsList results={answers} />}
    </>
  );
}
