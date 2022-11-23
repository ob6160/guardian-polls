import ioredis from "ioredis";
import { upsertPollPage } from "../../../../lib/pollstate";
import redis from "../../../../lib/redis";

export default async function handler(req, res) {
  const {
    query: { pollId },
  } = req;

  try {
    const pollPageState = await upsertPollPage(redis, pollId);
    return res.status(200).json(pollPageState);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(200).json({ error: "uh oh :(" });
  }
}
