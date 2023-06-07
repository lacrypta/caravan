import {
  type Event,
  SimplePool,
  type UnsignedEvent,
  getEventHash,
  getPublicKey,
  getSignature,
} from "nostr-tools";

export const getAwards = async (
  pubkey: string,
  relays: string[]
): Promise<Event[]> => {
  const pool = new SimplePool();

  const events = await pool.list(relays, [
    {
      kinds: [8],
      "#p": [pubkey],
    },
  ]);

  return events ? events : [];
};

export const isAwarded = async (
  pubkey: string,
  relays: string[]
): Promise<boolean> => {
  const pool = new SimplePool();

  const event = await pool.get(relays, {
    kinds: [8],
    "#a": [
      `30009:2ad91f1dca2dcd5fc89e7208d1e5059f0bac0870d63fc3bac21c7a9388fa18fd:probando`,
    ],
    "#p": [pubkey],
  });

  console.dir(event);

  return !!event;
};

export const createAward = (
  privkey: string,
  relayList: string[],
  destination: string,
  dTag: string
): Event => {
  const pool = new SimplePool();
  const pubkey = getPublicKey(privkey);

  const kind = 30009;
  const unsignedEvent: UnsignedEvent = {
    pubkey: pubkey,
    content: "",
    created_at: Date.now(),
    kind: 8,
    tags: [
      ["a", `${kind}:${pubkey}:${dTag}`],
      ["p", destination],
    ],
  };

  const event: Event = {
    ...unsignedEvent,
    id: getEventHash(unsignedEvent),
    sig: getSignature(unsignedEvent, privkey),
  };

  pool.publish(relayList, event);

  return event;
};
