import { nip05 } from "nostr-tools";
import { NextApiRequest, NextApiResponse } from "next";
import { validateEmail } from "~/utils/utils";

// Constants
import relayList from "../../../constants/relays.json";
import { getAwards } from "~/utils/nostr";

// Environment variables
const EMITTER_PUBLIC = process.env.EMITTER_PUBLIC || "";
const EMITTER_PRIVATE = process.env.EMITTER_PRIVATE || "";
const BADGE_D_TAG = process.env.BADGE_D_TAG || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   const handle = req.body.comment;
  const handle = "agustin@hodl.ar".toLocaleLowerCase().trim();
  console.dir("handle: " + handle);

  if (!validateEmail(handle)) {
    res.status(400).json("not a valid handle");
    console.error("not a valid handle");
    return;
  }

  const profile = await nip05.queryProfile(handle);

  if (!profile) {
    res.status(400).json("handle not found");
    console.error("handle not found");
    return;
  }

  //   console.dir(profile.pubkey);

  //   // Lookup for awards
  const awards = await getAwards(profile.pubkey, relayList);

  console.info("awards:");

  awards.forEach((award) => {
    console.info("Award:");
    console.dir(award);

    console.info("tags:");
    console.dir(award.tags);
    console.info("----------");
  });

  //   console.dir(awards);

  res.status(200).json({ pubkey: profile.pubkey, relays: relayList });
}
