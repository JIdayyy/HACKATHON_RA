import { ApolloClient, InMemoryCache } from "@apollo/client";

import { API_URL, KEY } from "./config";
const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": KEY,
    // 'Authorization': `Bearer xxxx`,
  },
});

export default client;
