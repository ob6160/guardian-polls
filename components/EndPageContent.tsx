import { css } from "@emotion/react";
import { space, textSans } from "@guardian/source-foundations";
import { headline } from "@guardian/source-foundations/dist/cjs/typography/api";
import { Button, Container } from "@guardian/source-react-components";
import Link from "next/dist/client/link";
import { Poll, Bucket } from "../poll-data/types";
import PollResults from "./PollResults";

interface Props {
  poll: Poll;
  bucket: Bucket;
}

const headlineStyle = css`
  ${headline.medium({ fontWeight: "bold" })};
  margin: 0;
  padding: ${space[2]}px 0;
`;

const paragraphStyle = css`
  ${textSans.large()};
  margin: 0;
`;

const EndPageContent = ({ poll, bucket }: Props) => {
  return (
    <>
      <Container sideBorders topBorder element="header">
        <h1 css={headlineStyle}>{poll.title}</h1>
      </Container>
      <Container sideBorders topBorder>
        <p css={paragraphStyle}>{bucket.text}</p>

        <Link href="/" passHref={true}>
          <Button>back to homepage</Button>
        </Link>
      </Container>

      <PollResults poll={poll} />
    </>
  );
};

export default EndPageContent;
