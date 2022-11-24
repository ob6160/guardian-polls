import type { NextPage } from "next";
import Head from "next/head";

import { polls } from "../poll-data";
import type { PollData } from "../poll-data/types";

interface QuestionPageProps {
  pollId: string;
  poll?: PollData;
}

const QuestionPage: NextPage = (props: QuestionPageProps) => {
  const { pollId, poll } = props;

  return (
    <div>
      <Head>
        <title>Poll - {pollId}</title>
      </Head>

      <main>
        <h1>{poll?.title}</h1>
      </main>
    </div>
  );
};

export const getStaticProps = async (context: {
  params: { pollid: string };
}): Promise<{ props: QuestionPageProps }> => {
  const poll = polls.find((poll) => poll.id === context.params.pollid);

  return {
    props: {
      pollId: context.params.pollid,
      poll,
    },
  };
};

export async function getStaticPaths() {
  const paths = polls.map((poll) => `/${poll.id}`);

  return {
    paths,
    fallback: false,
  };
}

export default QuestionPage;
