"use client"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { getServerSideProps } from "@apollo/client/react/ssr";

// Define the makeApolloClient function
function makeApolloClient() {
  return new ApolloClient({
    uri: "https://genuine-pegasus-34.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
  });
}

export default function ApolloWrapper({ children }) {
  return (
    <ApolloProvider client={makeApolloClient()}>
      {children}
    </ApolloProvider>
  );
}

export { getServerSideProps };
