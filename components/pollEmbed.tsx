import { css } from "@emotion/react";
import {
  ChoiceCard,
  ChoiceCardGroup,
  InlineError,
} from "@guardian/source-react-components";
import React from "react";
import useSWR from "swr";
import { combinePollAndAnswers } from "../lib/answerParsing";
import { PollData } from "../poll-data/types";
import StatsList from "./StatsLists";

const fetcher = (url) => fetch(url).then((r) => r.json());

function Profile(props: { pollData: PollData; answerId: string }) {
  const { pollData, answerId } = props;
  const voteUrl = `api/poll/${pollData.id}/vote/${answerId}`;
  const readUrl = `api/poll/${pollData.id}`;

  const { data, error } = useSWR(voteUrl, fetcher);
  const answers = data ? combinePollAndAnswers(data, pollData) : [];

  if (error)
    return (
      <div>
        <InlineError>failed to load</InlineError>
      </div>
    );
  if (!data) return <div>loading...</div>;
  if (data) return <StatsList results={answers} />;
}

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
  const [submitted, setSubmitted] = React.useState<string | undefined>(
    undefined
  );

  const submit = (answerId) => {
    if (submitted) {
      console.warn("ALREAY SUBMITTED");
    }

    setSubmitted(answerId);
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
      {submitted && <Profile pollData={pollData} answerId={submitted} />}
    </div>
  );
};
