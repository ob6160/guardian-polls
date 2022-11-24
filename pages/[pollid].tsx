import type { NextPage } from "next";
import Head from "next/head";
import { Poll } from "../components/pollEmbed";

import { polls } from "../poll-data";
import type { PollData } from "../poll-data/types";

interface QuestionPageProps {
  pollId: string;
  pollData?: PollData;
}

const QuestionPage: NextPage = (props: QuestionPageProps) => {
  const { pollId, pollData } = props;

  return (
    <div>
      <Head>
        <title>{`Poll - ${pollId}`}</title>
      </Head>

      <main>
        <Poll pollData={pollData} />
      </main>
    </div>
  );
};

export const getStaticProps = async (context: {
  params: { pollid: string };
}): Promise<{ props: QuestionPageProps }> => {
  const pollData = polls.find((poll) => poll.id === context.params.pollid);

  return {
    props: {
      pollId: context.params.pollid,
      pollData,
    },
  };
};

export async function getStaticPaths() {
  const paths = polls.map((pollData) => `/${pollData.id}`);

  return {
    paths,
    fallback: false,
  };
}

export default QuestionPage;
