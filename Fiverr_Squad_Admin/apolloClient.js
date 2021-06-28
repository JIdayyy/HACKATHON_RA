import { ApolloClient, InMemoryCache } from "@apollo/client";

const myClientWithAuth = new ApolloClient({
  uri: "https://fiverr-squad.hasura.app/v1/graphqlv",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "PjfyrUDJWBKdgA3529sHNwxOifZwefIYqN5Bk90zWb52XSYMr6CpkZXpSGYck8gC",
    // 'Authorization': `Bearer xxxx`,
  },
});

export default myClientWithAuth;
