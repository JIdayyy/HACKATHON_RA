import React, { useState, useEffect } from "react";
import { Admin, Resource, ListGuesser, EditGuesser, Create } from "react-admin";
import "./App.css";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import buildHasuraProvider from "ra-data-hasura";
import userCreate from "../src/components/UserList";
import pictureCreate from "../src/components/PictureList";
import projectCreate from "../src/components/ProjectList";
function App() {
  const [dataProvider, setDataProvider] = useState(null);
  const myClientWithAuth = new ApolloClient({
    uri: "https://fiverr-squad.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
      "x-hasura-admin-secret":
        "PjfyrUDJWBKdgA3529sHNwxOifZwefIYqN5Bk90zWb52XSYMr6CpkZXpSGYck8gC",
    },
  });

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        client: myClientWithAuth,
      });
      setDataProvider(() => dataProvider);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <p>Loading...</p>;

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="User" list={ListGuesser} create={userCreate} />
      <Resource name="Picture" list={ListGuesser} create={pictureCreate} />
      <Resource name="BusinessSector" list={ListGuesser} />
      <Resource name="Skill" list={ListGuesser} />
      <Resource name="Job" list={ListGuesser} />
      <Resource name="Squad" list={ListGuesser} />
      <Resource name="squads" />
      <Resource name="Project" list={ListGuesser} create={projectCreate} />
      <Resource name="businesses" list={ListGuesser} />
    </Admin>
  );
}

export default App;
