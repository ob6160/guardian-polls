import type { NextPage } from "next";
import Link from "next/dist/client/link";
import Head from "next/head";
import { polls } from "../../poll-data";
import { Poll } from "../../poll-data/types";

interface EndPageProps {
  pollId?: string;
  poll?: Poll;
}

const EndPage: NextPage = (props: EndPageProps) => {
  const { pollId = "", poll } = props;

  return (
    <div>
      <Head>
        <title>Poll - {pollId}</title>
      </Head>

      <main>
        <Link href="/" passHref={true}>
          <span>&lArr; homepage</span>
        </Link>

        <p>That was {pollId}</p>
        {!!poll && <p>It had {poll.questions.length} questions</p>}
      </main>
    </div>
  );
};

export const getStaticProps = async (context: {
  params: { id: string };
}): Promise<{ props: EndPageProps }> => {
  return {
    props: {
      pollId: context.params.id,
      poll: polls.find((poll) => poll.id === context.params.id),
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: polls.map((poll) => `/end-page/${poll.id}`),
    fallback: false,
  };
}

export default EndPage;
