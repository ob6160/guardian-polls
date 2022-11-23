import ioredis from "ioredis";
import { upsertPollPage } from "../../../lib/pollstate";

const redis = new ioredis(process.env.REDIS_URL);

export default async function handler(req, res) {
  const {
    query: { page },
  } = req;

  try {
    const pollPageState = await upsertPollPage(redis, page, []);
    return res.status(200).json(pollPageState);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(200).json({ error: "uh oh :(" });
  }
}
