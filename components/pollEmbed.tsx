import { css } from "@emotion/react";
import {
  ChoiceCard,
  ChoiceCardGroup,
} from "@guardian/source-react-components";
import React, { useState } from "react";
import { PollPage, pollPageSchema } from "../lib/pollstate";
import { PollData } from "../poll-data/types";
import { ResultReloader } from "./ResultsReloader";

const fetcher = (url: string) => fetch(url).then((r) => r.json());


/** Todo:
 * accessibility?
 * next button?
 */

type Props = {
  pollData: PollData;
};

const wrapper = css`
  clear: left;
  border: #000000 3px dashed;
  border-radius: 12px;
  margin-bottom: 10px;
  width: 50%;
`;

const boilerplate = css`
  background: #052962;
  color: #ffffff;
  padding: 8px;
  margin: 1px;
  border-radius: 12px;
`;

const options = css`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: #f6f6f6;
`;

export const Poll: React.FC<Props> = ({ pollData }) => {
  const [submitted, setSubmitted] = useState<string | undefined>(undefined);

  const [pollResults, setPollResults] = useState<PollPage | undefined>(
    undefined
  );

  const submit = async (answerId) => {
    if (submitted) {
      return
    }
    setSubmitted(answerId);
    const voteUrl = `api/poll/${pollData.id}/vote/${answerId}`;
    const data = await fetcher(voteUrl);
    const parsedData = pollPageSchema.safeParse(data);

    if (parsedData.success) {
      setPollResults(data as PollPage);
    } else {
      console.warn("DATA DID NOT PARSE");
    }
  };

  const [question] = pollData.questions;

  return (
    <div css={wrapper}>
      <div css={boilerplate}>
        <h2>{pollData.title}</h2>
      </div>

      <div css={options}>
        <ChoiceCardGroup
          name={pollData.id}
          label={question.text}
          disabled={!!submitted}
        >
          {question.answers.map((answer) => (
            <ChoiceCard
              disabled={!!submitted}
              key={answer.id}
              id={`${pollData.id}-${answer.id}`}
              label={answer.text}
              value={answer.id}
              onClick={() => submit(answer.id)}
            />
          ))}
        </ChoiceCardGroup>
      </div>
      {pollResults && (
        <ResultReloader
          pollData={pollData}
          answerId={submitted}
          initialResults={pollResults}
        />
      )}
    </div>
  );
};
