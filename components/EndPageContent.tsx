import { css } from "@emotion/react";
import { space, textSans } from "@guardian/source-foundations";
import { headline } from "@guardian/source-foundations/dist/cjs/typography/api";
import { Button, Container } from "@guardian/source-react-components";
import Link from "next/dist/client/link";
import { PollData, Bucket } from "../poll-data/types";
import PollResults from "./PollResults";

interface Props {
  poll: PollData;
  bucket?: Bucket;
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
        <p css={paragraphStyle}>{poll.endPageText}</p>
        {bucket && <p css={paragraphStyle}>{bucket.text}</p>}
        <Link href="/" passHref={true}>
          <Button>back to homepage</Button>
        </Link>
      </Container>

      <PollResults poll={poll} />

      {poll.id === "metaverse" && (
        <Container sideBorders topBorder>
          <p>Thanks for your response!</p>
          <p>
            Continue the discussion in our comments section below or{" "}
            <Link href="https://www.theguardian.com/info/2022/sep/20/sign-up-for-the-techscape-newsletter-our-free-technology-email">
              <span style={{ textDecoration: "underline" }}>
                sign up to Techscape
              </span>
            </Link>
            , our free technology newsletter, for more insight.{" "}
          </p>

          <iframe style={{width:'100%', border:'none'}} src="https://www.theguardian.com/email/form/plain/tech-scape"></iframe>
        </Container>
      )}
    </>
  );
};

export default EndPageContent;
