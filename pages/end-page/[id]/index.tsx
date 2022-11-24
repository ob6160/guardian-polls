import type { NextPage } from "next";
import Head from "next/head";
import EndPageContent from "../../../components/EndPageContent";
import { polls } from "../../../poll-data";
import { PollData } from "../../../poll-data/types";

interface EndPageProps {
  pollId: string;   
  poll?: PollData;
}

const EndPage: NextPage = (props: EndPageProps) => {
  const { pollId, poll } = props;

  return (
    <div>
      <Head>
        <title>Poll - {pollId}</title>
      </Head>

      <main>
        {!!(poll) && <EndPageContent poll={poll} />}
      </main>
    </div>
  );
};

export const getStaticProps = async (context: {
  params: { id: string };
}): Promise<{ props: EndPageProps }> => {
  const poll = polls.find((poll) => poll.id === context.params.id);

  return {
    props: {
      pollId: context.params.id,
      poll,
    },
  };
};

export async function getStaticPaths() {
  const paths = polls.map(poll => `/end-page/${poll.id}`)
  
  return {
    paths,
    fallback: false,
  };
}

export default EndPage;
