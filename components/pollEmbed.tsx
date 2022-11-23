import { css } from "@emotion/react";
import { neutral, news, textSans } from "@guardian/source-foundations";
import { RadioGroup, Radio } from "@guardian/source-react-components";
import React from "react";

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

export const Poll: React.FC<{}> = () => (
  <div css={wrapper}>
    <div css={boilerplate}>
      <h2>Have your say...</h2>
    </div>

    <div css={options}>
      <RadioGroup
        error=""
        label="What is your favourite colour?"
        name="colours"
        orientation="vertical"
        supporting=""
      >
        <Radio label="Red" supporting="" value="red" />
        <Radio label="Blue" value="blue" />
      </RadioGroup>
    </div>
  </div>
);
