"use client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`query {
  launchLatest {
    username
  }
}`

export default function PollPage() {
  const { data } = useSuspenseQuery(query);

  return <div>{data.username}</div>;
};
