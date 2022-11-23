import { upsertPollPage } from "../../../../../lib/pollstate";
import redis from "../../../../../lib/redis";

export default async function handler(req, res) {
  const { pollId, answerId } = req.query;

  const pollPageState = await upsertPollPage(redis, pollId, answerId);

  // Upsert the poll
  // Include initial vote for the answer

  // If poll exists, just increment the vote count for the answer

  res.status(200).json(pollPageState);
}
