import { css } from "@emotion/react";
import { neutral, news, textSans } from "@guardian/source-foundations";
import {
  RadioGroup,
  Radio,
  Button,
  ChoiceCard,
  ChoiceCardGroup,
  InlineError
} from "@guardian/source-react-components";
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());
function Profile() {
  const { data, error } = useSWR("/api/poll/colour/vote/q1", fetcher);

  console.log(data);

  if (error) return <div><InlineError>
  failed to load
</InlineError></div>;
  if (!data) return <div>loading...</div>;
  if (data) return <></>;
}

/** Todo:
 * accessibility?
 * next button?
 */

//const Props =

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

export const Poll: React.FC<{}> = () => {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <div css={wrapper}>
      <div css={boilerplate}>
        <h2>Have your say...</h2>
      </div>

      <div css={options}>
        <ChoiceCardGroup
          name="colours"
          label="What is your favourite colour?"
        >
          <ChoiceCard id="abc1" label="Red" value="Red" onClick={() => setSubmitted(true)}/>
          <ChoiceCard id="abc2" label="Blue" value="Blue" onClick={() => setSubmitted(true)}/>
        </ChoiceCardGroup>
        </div>
         {submitted && <Profile />}
    </div>
  );
};
