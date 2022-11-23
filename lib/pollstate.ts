import { Redis } from "ioredis";
import { z } from "zod";

const pollPageSchema = z.object({
  id: z.string().min(1),
  answers: z.array(
    z
      .object({
        name: z.string().min(1),
        voteCount: z.number().min(0),
      })
      .optional()
  ),
});

type PollPage = z.infer<typeof pollPageSchema>;
type PollPageAnswers = z.infer<typeof pollPageSchema>["answers"];

export const upsertPollPage = async (
  redis: Redis,
  pollPageId: string,
  initialAnswers: PollPageAnswers
) => {
  // Try and get the poll page info
  const pollPageData = await redis.get(pollPageId);

  // If the poll page data doesn't exist, we create the initial version.
  if (pollPageData === null) {
    const pollPage: PollPage = {
      id: pollPageId,
      answers: initialAnswers,
    };

    // Create the poll page state in Redis.
    await redis.set(pollPageId, JSON.stringify(pollPage));

    return pollPage;
  }

  return pollPageSchema.parse(JSON.parse(pollPageData));
};
