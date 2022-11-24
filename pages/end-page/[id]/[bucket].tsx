import type { NextPage } from "next";
import Head from "next/head";
import EndPageContent from "../../../components/EndPageContent";
import { polls } from "../../../poll-data";
import { Bucket, Poll } from "../../../poll-data/types";

interface EndPageProps {
  pollId: string;
  bucketId: string;
  poll?: Poll;
  bucket?: Bucket;
}


const EndPage: NextPage = (props: EndPageProps) => {
  const { pollId, poll, bucket } = props;

  return (
    <div>
      <Head>
        <title>{`poll: ${pollId}`}</title>
      </Head>

      <main>
        {!!(poll && bucket) && <EndPageContent poll={poll} bucket={bucket} />}
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
