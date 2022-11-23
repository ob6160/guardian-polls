import { css } from "@emotion/react";
import { space, textSans } from "@guardian/source-foundations";
import { headline } from "@guardian/source-foundations/dist/cjs/typography/api";
import { Button, Container } from "@guardian/source-react-components";
import type { NextPage } from "next";
import Link from "next/dist/client/link";
import Head from "next/head";
import { polls } from "../../../poll-data";
import { Bucket, Poll } from "../../../poll-data/types";

interface EndPageProps {
  pollId: string;
  bucketId: string;
  poll?: Poll;
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

const EndPage: NextPage = (props: EndPageProps) => {
  const { pollId, poll, bucket } = props;

  return (
    <div>
      <Head>
        <title>Poll - {pollId}</title>
      </Head>

      <main>
        {!!(poll && bucket) && (
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
          </>
        )}
      </main>
    </div>
  );
};

export const getStaticProps = async (context: {
  params: { id: string; bucket: string };
}): Promise<{ props: EndPageProps }> => {
  const poll = polls.find((poll) => poll.id === context.params.id);

  const bucket = poll?.buckets.find(
    (bucket) => bucket.id === context.params.bucket
  );

  return {
    props: {
      pollId: context.params.id,
      bucketId: context.params.bucket,
      poll,
      bucket,
    },
  };
};

export async function getStaticPaths() {
  const paths = polls.reduce((previousPaths: string[], currentPoll) => {
    const pollPaths = currentPoll.buckets.map(
      (bucket) => `/end-page/${currentPoll.id}/${bucket.id}`
    );
    return [...previousPaths, ...pollPaths];
  }, []);

  return {
    paths,
    fallback: false,
  };
}

export default EndPage;
