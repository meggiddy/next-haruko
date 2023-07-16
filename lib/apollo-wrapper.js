import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import { ApolloNextAppProvider, NextSSRInMemoryCache, SSRMultipartLink } from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
  const httpLink = new HttpLink({
    uri: "https://genuine-pegasus-34.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret": "lguuBuAMyVbQITmkq5oK3AbzLL17KJtrscmdAqhnqpWbcaBHwEFnmSNVJnwVL1fm", // Replace with your admin secret or access key
    },
  });

  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export function ApolloWrapper({ children }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
