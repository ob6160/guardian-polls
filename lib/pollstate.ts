import { Redis } from "ioredis";
import { z } from "zod";

const pollPageSchema = z.object({
  id: z.string().min(1),
  answerVotes: z.record(z.number().min(0)),
});

type PollPage = z.infer<typeof pollPageSchema>;

export const upsertPollPage = async (
  redis: Redis,
  pollPageId: string,
  answerId?: string
) => {
  // Try and get the poll page info
  const pollPageData = await redis.get(pollPageId);

  // If the poll page data doesn't exist, we create the initial version.
  if (pollPageData === null) {
    // Only setup a new answer record if an answerId was provided.
    const initialAnswerVotes = answerId ? { [answerId]: 1 } : {};

    const pollPage: PollPage = {
      id: pollPageId,
      answerVotes: initialAnswerVotes,
    };

    // Create the poll page state in Redis.
    await redis.set(pollPageId, JSON.stringify(pollPage));

    return pollPage;
  }

  const pollPage = pollPageSchema.parse(JSON.parse(pollPageData));

  // If an answerId was provided, we increment the vote count for that answer.
  // Otherwise, we just return the existing poll page state.
  if (answerId) {
    // If the poll page has been created, we increment the vote count for the answer.
    // If the answer doesn't exist, we create it and set it to 1.
    const currentAnswerVotes = pollPage.answerVotes[answerId] || 0;
    const answerVoteCount = currentAnswerVotes ? currentAnswerVotes + 1 : 1;

    const updatedPollPage: PollPage = {
      ...pollPage,
      answerVotes: {
        ...pollPage.answerVotes,
        [answerId]: answerVoteCount,
      },
    };

    await redis.set(pollPageId, JSON.stringify(updatedPollPage));

    return pollPageSchema.parse(updatedPollPage);
  }

  return pollPage;
};
